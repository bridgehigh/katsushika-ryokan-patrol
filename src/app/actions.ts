"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// Initialize clients (these keys must be set in environment variables)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const resendApiKey = process.env.RESEND_API_KEY || "";

const supabase = createClient(supabaseUrl, supabaseKey);
const resend = new Resend(resendApiKey);

// Form data type definition
interface FormState {
    success: boolean;
    message: string;
}

interface InquiryData {
    facilityName: string;
    companyName: string;
    name: string;
    email: string;
    phone: string;
    type: string;
    message: string;
}

export async function submitInquiry(data: InquiryData): Promise<FormState> {
    try {
        // 1. Save to Supabase
        // Note: 'inquiries' table must exist in Supabase
        const { error: dbError } = await supabase.from("inquiries").insert([
            {
                facility_name: data.facilityName,
                company_name: data.companyName,
                contact_name: data.name,
                email: data.email,
                phone: data.phone,
                inquiry_type: data.type,
                message: data.message,
                created_at: new Date().toISOString(),
            },
        ]);

        if (dbError) {
            console.error("Supabase Error:", dbError);
            throw new Error("データベースへの保存に失敗しました");
        }

        // 2. Send Email via Resend (Only if API key is present)
        if (resendApiKey) {
            const { error: emailError } = await resend.emails.send({
                from: "Katsushika Patrol <onboarding@resend.dev>", // Or your verified domain
                to: ["contact@gururito.co.jp"],
                subject: `【新規お問い合わせ】${data.facilityName}様より`,
                html: `
        <h2>新しいお問い合わせがありました</h2>
        <p><strong>お問い合わせ種別:</strong> ${getInquiryLabel(data.type)}</p>
        <hr />
        <h3>お客様情報</h3>
        <ul>
          <li><strong>施設名:</strong> ${data.facilityName}</li>
          <li><strong>法人名:</strong> ${data.companyName || "なし"}</li>
          <li><strong>担当者名:</strong> ${data.name}</li>
          <li><strong>メール:</strong> ${data.email}</li>
          <li><strong>電話番号:</strong> ${data.phone}</li>
        </ul>
        <hr />
        <h3>お問い合わせ内容</h3>
        <p style="white-space: pre-wrap;">${data.message || "なし"}</p>
      `,
            });

            if (emailError) {
                console.error("Resend Error:", emailError);
                // We don't throw here if DB save was successful, but warning is needed
                // throw new Error("メール送信に失敗しました");
            }
        } else {
            console.log("Resend API Key is missing. Skipping email sending.");
        }

        return { success: true, message: "送信が完了しました" };
    } catch (error) {
        console.error("Submission Error:", error);
        return {
            success: false,
            message: "送信中にエラーが発生しました。時間をおいて再度お試しください。",
        };
    }
}

function getInquiryLabel(type: string) {
    switch (type) {
        case "application":
            return "お申し込み";
        case "estimate":
            return "お見積もり依頼";
        case "inquiry":
            return "お問い合わせ";
        default:
            return type;
    }
}

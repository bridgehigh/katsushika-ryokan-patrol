"use client";

import { useState } from "react";
import { CheckCircle, Send, ArrowLeft } from "lucide-react";
import { submitInquiry } from "@/app/actions";

type FormState = "input" | "confirm" | "success";
type InquiryType = "application" | "estimate" | "inquiry";

interface FormData {
    facilityName: string;
    companyName: string;
    name: string;
    email: string;
    phone: string;
    type: InquiryType | "";
    message: string;
}

const INQUIRY_TYPES: { id: InquiryType; label: string }[] = [
    { id: "application", label: "お申し込み" },
    { id: "estimate", label: "お見積もり依頼" },
    { id: "inquiry", label: "お問い合わせ" },
];

export default function InquiryForm() {
    const [state, setState] = useState<FormState>("input");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        facilityName: "",
        companyName: "",
        name: "",
        email: "",
        phone: "",
        type: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const toConfirm = (e: React.FormEvent) => {
        e.preventDefault();
        if (
            formData.facilityName &&
            formData.name &&
            formData.email &&
            formData.phone &&
            formData.type
        ) {
            setState("confirm");
        }
    };

    const submitForm = async () => {
        setIsSubmitting(true);
        try {
            const result = await submitInquiry(formData);
            if (result.success) {
                setState("success");
            } else {
                alert(result.message); // Simple error handling for now
            }
        } catch (error) {
            alert("エラーが発生しました");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (state === "success") {
        return (
            <div className="max-w-xl mx-auto p-8 bg-brand-50 rounded-2xl text-center shadow-lg border border-brand-100">
                <div className="flex justify-center mb-6">
                    <CheckCircle className="w-16 h-16 text-patrol-primary" />
                </div>
                <h3 className="text-2xl font-bold text-brand-800 mb-4">送信が完了しました</h3>
                <p className="text-brand-600 mb-2">
                    お問い合わせありがとうございます。
                </p>
                <p className="text-brand-800 font-medium">
                    内容を確認の上、<span className="text-patrol-accent font-bold">2営業日以内</span>にご連絡いたします。
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl max-w-2xl mx-auto" id="contact-form">
            <h2 className="text-3xl font-bold text-center text-brand-800 mb-8">
                {state === "confirm" ? "入力内容の確認" : "お申し込み・お問い合わせ"}
            </h2>

            {state === "confirm" ? (
                <div className="space-y-6">
                    <div className="bg-brand-50 p-6 rounded-lg space-y-4">
                        <div>
                            <label className="text-sm text-brand-500 block mb-1">お問い合わせ種別</label>
                            <p className="text-brand-800 font-medium text-lg">
                                {INQUIRY_TYPES.find(t => t.id === formData.type)?.label}
                            </p>
                        </div>
                        <div>
                            <label className="text-sm text-brand-500 block mb-1">施設名</label>
                            <p className="text-brand-800 font-medium text-lg">{formData.facilityName}</p>
                        </div>
                        {formData.companyName && (
                            <div>
                                <label className="text-sm text-brand-500 block mb-1">法人名</label>
                                <p className="text-brand-800 font-medium text-lg">{formData.companyName}</p>
                            </div>
                        )}
                        <div>
                            <label className="text-sm text-brand-500 block mb-1">ご担当者名</label>
                            <p className="text-brand-800 font-medium text-lg">{formData.name}</p>
                        </div>
                        <div>
                            <label className="text-sm text-brand-500 block mb-1">メールアドレス</label>
                            <p className="text-brand-800 font-medium text-lg">{formData.email}</p>
                        </div>
                        <div>
                            <label className="text-sm text-brand-500 block mb-1">電話番号</label>
                            <p className="text-brand-800 font-medium text-lg">{formData.phone}</p>
                        </div>
                        <div>
                            <label className="text-sm text-brand-500 block mb-1">お問い合わせ内容</label>
                            <p className="text-brand-800 font-medium whitespace-pre-wrap">
                                {formData.message || "なし"}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setState("input")}
                            className="flex-1 py-3 px-6 rounded-full border-2 border-brand-300 text-brand-600 font-bold hover:bg-brand-50 transition-colors flex items-center justify-center gap-2"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            修正する
                        </button>
                        <button
                            onClick={submitForm}
                            disabled={isSubmitting}
                            className="flex-1 py-3 px-6 rounded-full bg-patrol-accent text-white font-bold hover:bg-orange-600 transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Send className="w-5 h-5" />
                            {isSubmitting ? "送信中..." : "送信する"}
                        </button>
                    </div>
                </div>
            ) : (
                <form onSubmit={toConfirm} className="space-y-6">
                    <div>
                        <label className="block text-brand-700 font-medium mb-3">
                            お問い合わせ種別 <span className="text-red-500 text-sm">*</span>
                        </label>
                        <div className="flex flex-col sm:flex-row gap-4">
                            {INQUIRY_TYPES.map((type) => (
                                <label key={type.id} className="flex items-center gap-2 cursor-pointer p-3 rounded-lg border border-brand-200 hover:bg-brand-50 has-[:checked]:bg-brand-50 has-[:checked]:border-patrol-secondary transition-all">
                                    <input
                                        type="radio"
                                        name="type"
                                        value={type.id}
                                        checked={formData.type === type.id}
                                        onChange={handleChange}
                                        required
                                        className="w-4 h-4 text-patrol-secondary border-gray-300 focus:ring-patrol-secondary"
                                    />
                                    <span className="text-brand-800">{type.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="facilityName" className="block text-brand-700 font-medium mb-2">
                            施設名 <span className="text-red-500 text-sm">*</span>
                        </label>
                        <input
                            required
                            type="text"
                            id="facilityName"
                            name="facilityName"
                            value={formData.facilityName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-brand-200 focus:border-patrol-secondary focus:ring-2 focus:ring-patrol-secondary/20 outline-none transition-all bg-brand-50/50"
                            placeholder="例：民宿かつしか"
                        />
                    </div>

                    <div>
                        <label htmlFor="companyName" className="block text-brand-700 font-medium mb-2">
                            法人名
                        </label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-brand-200 focus:border-patrol-secondary focus:ring-2 focus:ring-patrol-secondary/20 outline-none transition-all bg-brand-50/50"
                            placeholder="例：株式会社葛飾観光（個人の場合は空欄）"
                        />
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-brand-700 font-medium mb-2">
                            ご担当者名 <span className="text-red-500 text-sm">*</span>
                        </label>
                        <input
                            required
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-brand-200 focus:border-patrol-secondary focus:ring-2 focus:ring-patrol-secondary/20 outline-none transition-all bg-brand-50/50"
                            placeholder="例：葛飾 太郎"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block text-brand-700 font-medium mb-2">
                                メールアドレス <span className="text-red-500 text-sm">*</span>
                            </label>
                            <input
                                required
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-brand-200 focus:border-patrol-secondary focus:ring-2 focus:ring-patrol-secondary/20 outline-none transition-all bg-brand-50/50"
                                placeholder="mail@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-brand-700 font-medium mb-2">
                                電話番号 <span className="text-red-500 text-sm">*</span>
                            </label>
                            <input
                                required
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-brand-200 focus:border-patrol-secondary focus:ring-2 focus:ring-patrol-secondary/20 outline-none transition-all bg-brand-50/50"
                                placeholder="03-1234-5678"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-brand-700 font-medium mb-2">
                            お問い合わせ内容
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-brand-200 focus:border-patrol-secondary focus:ring-2 focus:ring-patrol-secondary/20 outline-none transition-all bg-brand-50/50"
                            placeholder="ご質問などございましたらご記入ください"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-4 rounded-full bg-brand-800 text-white font-bold text-lg hover:bg-brand-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        確認画面へ進む
                    </button>
                </form>
            )}
        </div>
    );
}

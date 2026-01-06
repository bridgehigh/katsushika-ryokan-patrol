
import Hero from "@/components/Hero";
import ServiceDetails from "@/components/ServiceDetails";
import Pricing from "@/components/Pricing";
import InquiryForm from "@/components/InquiryForm";

export default function Home() {
  return (
    <main className="min-h-screen font-sans text-brand-900">
      <header className="absolute top-0 left-0 w-full z-20 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-brand-800">
            かつしか<span className="text-patrol-accent">巡回</span>サービス
          </div>
          <nav>
            <a href="#contact-form" className="hidden sm:inline-block px-5 py-2 bg-white/80 backdrop-blur text-brand-800 font-bold rounded-full border border-brand-200 hover:bg-white transition-colors">
              お問い合わせ
            </a>
          </nav>
        </div>
      </header>

      <Hero />
      <ServiceDetails />
      <Pricing />

      <section className="py-20 bg-brand-50" id="inquiry">
        <InquiryForm />
      </section>

      <footer className="bg-brand-900 text-brand-100 py-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">かつしか巡回サービス</h2>
          <p className="mb-8 text-brand-400">
            葛飾区の安心・安全な旅館業運営をサポートします。
          </p>
          <p className="text-sm text-brand-600">
            &copy; 2026 Katsushika Patrol Service. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}


import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-brand-50 py-16 lg:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 z-10">
                        <div className="inline-block bg-white px-4 py-1.5 rounded-full border border-brand-200 shadow-sm animate-fade-in">
                            <span className="text-patrol-accent font-bold text-sm tracking-wider">2026年4月施行 法改正完全対応</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 leading-tight">
                            葛飾区の旅館業<br />
                            <span className="text-patrol-secondary">巡回業務</span>は<br />
                            プロにお任せ。
                        </h1>
                        <p className="text-lg text-brand-600 leading-relaxed max-w-lg">
                            改正旅館業法に基づく定期巡回を代行いたします。<br />
                            近隣住民の方々とも良好な関係を築く、<br />
                            親しみやすく確実なパトロールサービス。
                        </p>
                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact-form"
                                className="px-8 py-4 bg-patrol-accent text-white hover:bg-orange-600 rounded-full font-bold text-lg shadow-lg hover:shadow-orange-200 transition-all text-center"
                            >
                                月額3万円で申し込む
                            </a>
                            <a
                                href="#service-details"
                                className="px-8 py-4 bg-white text-brand-700 hover:bg-brand-50 rounded-full font-bold text-lg border border-brand-200 shadow-sm transition-all text-center"
                            >
                                サービス詳細を見る
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-patrol-primary/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-patrol-secondary/10 rounded-full blur-3xl"></div>
                        <Image
                            src="/images/hero.png"
                            alt="葛飾区の町並みとパトロールスタッフ"
                            width={600}
                            height={600}
                            className="relative rounded-3xl shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-500"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

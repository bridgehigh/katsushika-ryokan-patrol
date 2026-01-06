
import Image from "next/image";
import { ShieldCheck, MapPin, Smile } from "lucide-react";

export default function ServiceDetails() {
    return (
        <section id="service-details" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-patrol-accent font-bold tracking-widest text-sm uppercase">About Service</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mt-2">
                        2026年4月、<br className="md:hidden" />条例が変わります
                    </h2>
                    <p className="mt-4 text-brand-600 max-w-2xl mx-auto">
                        葛飾区の旅館業に関する条例改正により、<br />
                        宿泊者が滞在する期間中、施設及びその周辺の定期的な巡回が義務化されます。
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="order-2 md:order-1">
                        <Image
                            src="/images/service.png"
                            alt="施設周辺を点検するスタッフ"
                            width={600}
                            height={400}
                            className="rounded-3xl shadow-xl border-4 border-brand-50"
                        />
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <h3 className="text-2xl font-bold text-brand-800">
                            オーナー様の負担を減らし、<br />安心・安全な運営をサポート
                        </h3>
                        <p className="text-brand-600 leading-relaxed">
                            遠方にお住まいのオーナー様や、多忙な運営者様に代わって、
                            プロのスタッフが施設周辺を巡回チェックいたします。
                            ゴミの散乱や騒音の有無、不審な状況がないかを確認し、
                            近隣住民の皆様との良好な関係維持に貢献します。
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-start gap-3">
                                <div className="bg-patrol-primary/20 p-2 rounded-full text-patrol-primary">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-800">法令順守の徹底</h4>
                                    <p className="text-sm text-brand-600">改正条例の要件を満たす巡回記録を作成・保管します。</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-patrol-secondary/20 p-2 rounded-full text-patrol-secondary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-800">地域に密着した巡回</h4>
                                    <p className="text-sm text-brand-600">葛飾区の地理を熟知したスタッフが担当します。</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-patrol-accent/20 p-2 rounded-full text-patrol-accent">
                                    <Smile className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-800">親しみやすい対応</h4>
                                    <p className="text-sm text-brand-600">制服着用で、挨拶を大切にしたマナー重視の巡回。</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}


import { Check } from "lucide-react";

export default function Pricing() {
    return (
        <section className="py-20 bg-brand-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-patrol-accent font-bold tracking-widest text-sm uppercase">Pricing</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mt-2">
                        シンプルで分かりやすい料金体系
                    </h2>
                    <p className="mt-4 text-brand-600">
                        初期費用なし。月額ご契約で安心してご利用いただけます。
                    </p>
                </div>

                <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-100 transform hover:scale-105 transition-transform duration-300">
                    <div className="bg-patrol-secondary p-6 text-center text-white">
                        <h3 className="text-xl font-bold tracking-wide">スタンダード巡回プラン</h3>
                    </div>
                    <div className="p-8 md:p-12 text-center">
                        <div className="flex justify-center items-end gap-1 mb-2">
                            <span className="text-gray-500 font-bold mb-2">月々</span>
                            <span className="text-6xl font-bold text-brand-900 tracking-tight">3</span>
                            <span className="text-2xl font-bold text-brand-800 mb-2">万円</span>
                        </div>
                        <p className="text-brand-500 mb-8 font-medium">（税込 33,000円）</p>

                        <ul className="space-y-4 text-left inline-block">
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-patrol-primary" />
                                <span className="text-brand-700">宿泊者滞在時の定期巡回</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-patrol-primary" />
                                <span className="text-brand-700">巡回報告書の作成（LINE/メール）</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-patrol-primary" />
                                <span className="text-brand-700">緊急時の即時連絡</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-patrol-primary" />
                                <span className="text-brand-700">ゴミ拾い・簡易清掃</span>
                            </li>
                        </ul>

                        <div className="mt-10">
                            <a href="#contact-form" className="block w-full py-4 bg-patrol-accent text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-md">
                                まずは相談する
                            </a>
                            <p className="mt-4 text-xs text-brand-400">
                                ※ 施設規模により別途お見積りとなる場合がございます
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

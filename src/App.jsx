import React from 'react'

// =============================================================================
// ヒーローセクション：ファーストビュー（白背景・中央配置・ロゴアニメーション）
// =============================================================================
function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-16 md:py-24">
      {/* 仮置きロゴ：ギリシャ文字 θ をモチーフにしたシンボル（表示時にふわっと出現＋軽く浮かぶアニメーション） */}
      <div className="mb-6 md:mb-8 animate-float">
        <div
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-navy flex items-center justify-center bg-white/80 hero-logo-reveal"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          <span className="text-5xl md:text-6xl font-serif text-navy" style={{ fontFamily: 'Georgia, serif' }}>
            θ
          </span>
        </div>
      </div>

      {/* キャッチフレーズ（控えめ・グレー） */}
      <p className="hero-text-reveal text-xs md:text-sm text-gray-500 tracking-widest mb-2" style={{ opacity: 0, animationDelay: '0.4s' }}>
        Technology drives your life.
      </p>

      {/* メインコピー：太めゴシック・深いネイビー */}
      <h1 className="hero-text-reveal text-2xl md:text-4xl lg:text-5xl font-bold text-navy text-center leading-tight tracking-wide mb-3" style={{ opacity: 0, animationDelay: '0.5s' }}>
        合わせるのは、不動産の方だ。
      </h1>

      {/* サブコピー：セリフ体イタリック・青エメラルド */}
      <p
        className="hero-text-reveal text-sm md:text-lg text-emerald italic mb-8 md:mb-10 tracking-wider"
        style={{ fontFamily: 'Georgia, "Times New Roman", serif', opacity: 0, animationDelay: '0.6s' }}
      >
        Property fits your life.
      </p>

      {/* CTA：LINEで先行登録する */}
      <a
        href="#cta"
        className="hero-text-reveal inline-block px-8 py-4 bg-emerald text-white font-semibold rounded-full tracking-wide hover:opacity-90 transition-opacity shadow-lg"
        style={{ opacity: 0, animationDelay: '0.7s' }}
      >
        LINEで先行登録する
      </a>

      {/* ロゴ・コピーのふわっと出現＋ロゴの浮遊アニメーション */}
      <style>{`
        .hero-logo-reveal {
          animation: heroLogoReveal 1.2s ease-out 0.2s forwards;
        }
        .hero-text-reveal {
          animation: heroLogoReveal 0.8s ease-out forwards;
          transform: translateY(20px);
        }
        @keyframes heroLogoReveal {
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  )
}

// =============================================================================
// 課題提起セクション：従来の不動産探しの「不条理」3ポイント（カード形式）
// =============================================================================
function ProblemSection() {
  const points = [
    {
      title: '「おとり物件」の罠',
      description:
        '「いいな」と思った物件が「先ほど埋まりました」と常に言われる精神的ストレス。',
      icon: '✖️',
      iconLabel: '満室・おとり',
    },
    {
      title: '終わらない検索と妥協',
      description:
        '何百件もの物件情報を条件に合わせ、自分でスクロールして探す疲弊感。',
      icon: '🔍',
      iconLabel: '検索の無限ループ',
    },
    {
      title: 'タワマン特有のアナログ手続き',
      description:
        '引越し日程、管理組合への申請、鍵の受け渡しなど、電話やFAXに縛られる非効率。',
      icon: '📞',
      iconLabel: '電話・FAX・書類',
    },
  ]

  return (
    <section id="problem" className="bg-gray-50 py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-navy text-center mb-12 md:mb-16 tracking-wide leading-relaxed">
          もう、物件探しで妥協しない。
          <br />
          時間の無駄は、もう終わり。
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {points.map((item, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl mb-4" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
              <p className="sr-only">{item.iconLabel}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// 解決策セクション：Swappeeの3つの価値 + Before/After 比較
// =============================================================================
function SolutionSection() {
  const solutions = [
    {
      title: 'おとり物件ゼロ。リアルタイムマッチング',
      description:
        'AIが退去予定情報まで監視・取得し、募集前の物件情報をいち早くあなたへ。',
      icon: '✔',
      sub: 'リアルタイム',
    },
    {
      title: 'あなた専用のライフスタイル・レコメンド',
      description:
        '通勤経路、家族全員の動線を学習し、あなたが気づかなかった最適物件をAIが提案。',
      icon: '🤖',
      sub: 'パーソナライズ',
    },
    {
      title: '全てをデジタルで。ストレスフリーな入退去',
      description: 'AIが引越し日程、鍵の受け渡しまでワンストップで最適化。',
      icon: '📱',
      sub: 'デジタル完結',
    },
  ]

  const comparison = [
    { axis: '情報の鮮度', before: '掲載後に自分で検索', after: 'リアルタイム・募集前から' },
    { axis: '探す手間', before: '条件に合わせてスクロール', after: 'AIオートメーション' },
    { axis: '入居手続き', before: '電話・FAX・書類', after: 'ワンストップ・デジタル' },
  ]

  return (
    <section id="solution" className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-navy text-center mb-4 tracking-wide">
          Swappeeが解決する3つの革命的な価値。
        </h2>
        <p className="text-center text-gray-600 mb-12 md:mb-16">
          Swappeeが、あなたの人生に不動産をフィットさせる。
        </p>

        {/* 解決策カード（青エメラルドをアクセントに） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {solutions.map((item, i) => (
            <article
              key={i}
              className="rounded-2xl p-6 md:p-8 border-2 border-emerald/20 bg-emerald/5 hover:border-emerald/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-emerald/20 text-emerald flex items-center justify-center text-xl font-bold mb-4">
                {item.icon}
              </div>
              <span className="text-xs font-semibold text-emerald tracking-wider uppercase">{item.sub}</span>
              <h3 className="text-lg font-bold text-navy mt-1 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>

        {/* Before / After 比較（従来型 vs Swappee） */}
        <div className="rounded-2xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-3 bg-gray-100 text-sm font-semibold text-navy">
            <div className="p-4 border-b border-r border-gray-200">項目</div>
            <div className="p-4 border-b border-r border-gray-200 text-center">従来（Pull型）</div>
            <div className="p-4 border-b border-gray-200 text-center text-emerald">Swappee（Push型）</div>
          </div>
          {comparison.map((row, i) => (
            <div key={i} className="grid grid-cols-3 text-sm">
              <div className="p-4 border-r border-b border-gray-200 font-medium text-navy">{row.axis}</div>
              <div className="p-4 border-r border-b border-gray-200 text-gray-600">{row.before}</div>
              <div className="p-4 border-b border-gray-200 text-emerald font-medium">{row.after}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          AIが、不動産をあなたの人生に同期（Sync）させる。
        </p>
      </div>
    </section>
  )
}

// =============================================================================
// フッター：ロゴ・コピーライト・ソーシャル（ダミー）
// =============================================================================
function Footer() {
  return (
    <footer id="cta" className="bg-navy text-white py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-serif" style={{ fontFamily: 'Georgia, serif' }}>
            θ
          </span>
          <span className="font-bold tracking-wider">Swappee</span>
        </div>
        <div className="flex gap-6 text-sm text-white/80">
          <a href="#!" className="hover:text-emerald transition-colors" aria-label="Twitter（ダミー）">
            Twitter
          </a>
          <a href="#!" className="hover:text-emerald transition-colors" aria-label="LINE（ダミー）">
            LINE
          </a>
        </div>
      </div>
      <p className="text-center text-white/60 text-xs mt-8 tracking-wide">
        © {new Date().getFullYear()} Techmaiz. All rights reserved.
      </p>
    </footer>
  )
}

// =============================================================================
// App：全セクションをモバイルファースト・レスポンシブで構成
// =============================================================================
export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <Footer />
    </div>
  )
}

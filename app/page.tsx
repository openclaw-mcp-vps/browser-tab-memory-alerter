export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Chrome Extension
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Your Browser From<br />
          <span className="text-[#58a6ff]">Eating All Your RAM</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Tab Memory Alerter monitors every open tab in real time and warns you before your system slows to a crawl — with smart suggestions on which tabs to close.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $5/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Works on Chrome &amp; Edge.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: "📊", title: "Live Memory Monitor", desc: "See per-tab RAM usage updated every few seconds via Chrome APIs." },
          { icon: "🔔", title: "Smart Alerts", desc: "Get notified before you hit system limits, not after the freeze." },
          { icon: "🗂️", title: "Close Suggestions", desc: "One-click recommendations for the heaviest, least-used tabs." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$5</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Real-time tab memory tracking",
              "Configurable alert thresholds",
              "Smart close suggestions",
              "Works on Chrome &amp; Edge",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          {[
            {
              q: "Which browsers are supported?",
              a: "Tab Memory Alerter works on Google Chrome and Microsoft Edge (any Chromium-based browser that supports the chrome.processes API)."
            },
            {
              q: "How does the memory monitoring work?",
              a: "The extension uses Chrome's built-in chrome.processes and performance.memory APIs to poll each tab's memory footprint every few seconds — no external servers involved."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel from your Lemon Squeezy customer portal at any time. Your access continues until the end of the billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Tab Memory Alerter. All rights reserved.
      </footer>
    </main>
  )
}

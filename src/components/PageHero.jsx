import Icon from './Icon.jsx'
import CameraArt from './CameraArt.jsx'

export default function PageHero({ eyebrow, title, desc, art = 'dslr', children }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-glow opacity-60" />
      <div className="absolute -top-24 right-[-10%] w-[520px] h-[520px] rounded-full bg-brand-500/10 blur-[120px]" />
      <div className="absolute -bottom-32 left-[-10%] w-[420px] h-[420px] rounded-full bg-accent-500/10 blur-[120px]" />

      <div className="relative container-page grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="eyebrow mb-5">
            <span className="h-px w-8 bg-brand-500/60" />
            {eyebrow}
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] text-ink-100">
            {title}
          </h1>
          {desc && (
            <p className="mt-6 text-ink-300 text-lg leading-relaxed max-w-xl">{desc}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>

        <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: '120ms' }}>
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-500/15 to-accent-500/10 blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden border border-ink-700 bg-ink-900">
            <div className="absolute inset-0 grid-glow opacity-50" />
            <div className="relative aspect-[4/3]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[78%]">
                  <div className="absolute inset-0 rounded-full bg-brand-500/20 blur-3xl animate-pulse-ring" />
                  <CameraArt variant={art} className="relative w-full" />
                  <span className="absolute -bottom-2 -right-2 inline-flex items-center gap-1.5 rounded-full bg-ink-950/90 border border-ink-700 px-3 py-1.5 text-xs font-medium text-brand-300">
                    <Icon name="shield" className="w-3.5 h-3.5" /> Terawat
                  </span>
                </div>
              </div>
            </div>
            <div className="relative flex items-center gap-3 border-t border-ink-800 px-5 py-4 bg-ink-950/60">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm text-ink-300">Unit tersedia hari ini</span>
              <span className="ml-auto text-sm text-ink-500">Jabodetabek &amp; On-site</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

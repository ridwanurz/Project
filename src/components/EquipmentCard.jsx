import Icon from './Icon.jsx'
import CameraArt from './CameraArt.jsx'

export default function EquipmentCard({ item, delay = 0 }) {
  return (
    <article
      className="group card-surface rounded-3xl overflow-hidden flex flex-col hover:border-brand-500/40 hover:shadow-[0_30px_70px_-40px_rgba(245,181,68,0.55)] transition-all duration-300 hover:-translate-y-1 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
        <CameraArt
          variant={item.art}
          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-ink-950/80 border border-ink-700 text-ink-200 backdrop-blur">
            {item.category}
          </span>
        </div>
        {item.badge && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gradient-to-br from-brand-300 to-brand-600 text-ink-950">
            {item.badge}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg font-semibold text-ink-100 group-hover:text-brand-300 transition-colors">
          {item.name}
        </h3>

        <ul className="mt-3 space-y-1.5">
          {item.spec.map((s) => (
            <li key={s} className="flex items-start gap-2 text-sm text-ink-400">
              <Icon name="check" className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
              <span>{s}</span>
            </li>
          ))}
        </ul>

        <p className="mt-3 text-xs leading-relaxed text-ink-500 border-l-2 border-ink-700 pl-3">
          {item.note}
        </p>

        <div className="mt-5 pt-4 border-t border-ink-800 flex items-end justify-between gap-3">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-ink-500">Mulai</span>
            <p className="font-display text-xl font-bold text-ink-100">
              Rp {item.price}
              <span className="text-sm font-normal text-ink-400">/{item.unit}</span>
            </p>
          </div>
          <a
            href={`https://wa.me/6281299344550?text=${encodeURIComponent(
              `Halo Lentera Kamera, saya ingin menyewa ${item.name}.`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost px-4 py-2 text-sm whitespace-nowrap"
          >
            Sewa
            <Icon name="arrowRight" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  )
}

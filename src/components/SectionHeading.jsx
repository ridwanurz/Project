export default function SectionHeading({
  eyebrow,
  title,
  desc,
  align = 'center',
  className = '',
}) {
  const alignCls =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`flex flex-col ${alignCls} max-w-2xl ${className}`}>
      {eyebrow && (
        <span className="eyebrow mb-4">
          <span className="h-px w-8 bg-brand-500/60" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-100 leading-tight">
        {title}
      </h2>
      {desc && <p className="mt-4 text-ink-300 leading-relaxed">{desc}</p>}
    </div>
  )
}

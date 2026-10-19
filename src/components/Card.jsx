export default function Card({ title, category, children }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-emerald-500/50 transition-colors">
      {category && (
        <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
          {category}
        </span>
      )}
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
import Card from "../components/Card";
import { TEAM } from "../data/data";

export default function About() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto px-4 py-8 text-white">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Tentang Sewa Kamera Bandung</h1>
        <p className="text-slate-400 text-sm">Penyedia peralatan sinematografi terbaik sejak 2020</p>
      </div>

      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
        <h2 className="font-bold text-emerald-400 text-lg">Visi & Misi</h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Menjadi mitra pembuat film dan kreator konten di Bandung dengan memberikan peralatan kamera dengan tarif terjangkau
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Profil Penggerak Sewa Kamera Bandung</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {TEAM && TEAM.length > 0 ? (
            TEAM.map((t, idx) => (
              <Card key={idx} title={t.name} category={t.role}>
                <p className="text-slate-400 text-xs mt-1">Pengalaman: {t.exp}</p>
              </Card>
            ))
          ) : (
            <p className="text-slate-400 text-xs">Data tim tidak ditemukan.</p>
          )}
        </div>
      </div>
    </div>
  );
}
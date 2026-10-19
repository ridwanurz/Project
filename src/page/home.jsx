import Card from "../components/Card";
import { cameras } from "../data/data";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">Sewa Kamera Terbaik di Bandung</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Temukan berbagai pilihan kamera dan lensa profesional untuk kebutuhan syuting, wedding, event, dan konten digital Anda
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-emerald-400">Kamera Populer</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cameras && cameras.length > 0 ? (
          cameras.slice(0, 3).map((item) => (
            <Card key={item.id} title={item.name} category={item.brand}>
              <p className="text-slate-300 text-sm mb-3">{item.desc}</p>
              <p className="text-emerald-400 font-semibold">
                Rp {item.price?.toLocaleString("id-ID")} / hari
              </p>
            </Card>
          ))
        ) : (
          <p className="text-slate-400">Data kamera tidak ditemukan.</p>
        )}
      </div>
    </div>
  );
}
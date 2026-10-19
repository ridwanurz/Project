import Card from "../components/Card";
import { services } from "../data/data";

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Layanan Kami</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services && services.length > 0 ? (
          services.map((item) => (
            <Card key={item.id} title={item.title} category="Layanan">
              <p className="text-slate-300 text-sm">{item.desc}</p>
            </Card>
          ))
        ) : (
          <p className="text-slate-400">Layanan tidak ditemukan.</p>
        )}
      </div>
    </div>
  );
}
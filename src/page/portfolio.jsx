import Card from "../components/Card";
import { portfolios } from "../data/data";

export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Portofolio Project Kami</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolios && portfolios.length > 0 ? (
          portfolios.map((item) => (
            <Card key={item.id} title={item.title} category={item.client}>
              <p className="text-slate-300 text-sm">{item.desc}</p>
            </Card>
          ))
        ) : (
          <p className="text-slate-400">Portofolio tidak ditemukan.</p>
        )}
      </div>
    </div>
  );
}
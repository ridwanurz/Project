import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Hubungi Kami</h1>
      <h2 className="text-slate-400 text-center mb-8"> Untuk pemesanan lebih lanjut</h2>

      {submitted ? (
        <div className="bg-emerald-600/20 border border-emerald-500 text-emerald-300 p-4 rounded-lg text-center">
          Pesan berhasil dikirim! Kami akan menghubungi Anda segera.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 bg-slate-800 p-6 rounded-xl border border-slate-700">
          <div>
            <label className="block text-sm font-medium mb-1">Nama</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
              placeholder="Nama Lengkap"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
              placeholder="email@contoh.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Pesan</label>
            <textarea
              rows="4"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
              placeholder="Tulis pesan Anda..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 font-semibold py-2.5 rounded-lg transition-colors text-slate-900"
          >
            Kirim Pesan
          </button>
        </form>
      )}
    </div>
  );
}
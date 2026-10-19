export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Sewa Kamera Bandung. All rights reserved.</p>
      </div>
    </footer>
  );
}
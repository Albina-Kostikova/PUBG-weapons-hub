export default function Footer() {
  return (
    <footer className="flex shrink-0 py-6 text-center text-gray-400 
                      bg-[url('/img/footer-bg.jpg')] bg-cover bg-center
                       relative">
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
      <p className="relative z-10 px-4 md:px-0">
        © 2026 PUBG Weapon Hub. Все данные взяты из открытых источников.
      </p>
    </footer>
  )
}
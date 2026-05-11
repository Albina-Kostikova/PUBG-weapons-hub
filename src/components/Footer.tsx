import Image from 'next/image'

export default function Footer() {
  return (
    <footer
      className="flex justify-between items-center h-50 shrink-0 text-center text-gray-400 
                      bg-[url('/img/footer-bg.webp')] bg-cover bg-position-[center_18%]
                       relative">
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
      <div className="absolute top-14 left-35 text-[#dcdcdcd6] pointer-events-none">Соцсети</div>
      <div className="footer-icons flex whitespace-nowrap gap-4 z-20 ml-10 mt-6">
        <a
          href="https://vk.com/pubg"
          title="VK"
          className="group h-10 w-10 p-2 rounded-lg bg-white/10 hover:bg-white/15 transition">
          <Image
            width={242}
            height={24}
            src="/vk.svg"
            alt="VK"
            className="w-6 h-6 opacity-85 group-hover:opacity-100 
                 transition duration-300 group-hover:scale-110
                 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]"
          />
        </a>
        <a
          href="https://www.twitch.tv/pubg_cis"
          title="Twitch"
          className="group h-10 w-10 p-2 rounded-lg bg-white/10 hover:bg-white/15 transition">
          <Image
            src="/twitch.svg"
            alt="Twitch"
            width={24}
            height={24}
            className="w-6 h-6 opacity-85 group-hover:opacity-100 
                           transition duration-300 group-hover:scale-110
                           group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
          />
        </a>
        <a
          href="https://www.youtube.com/c/PUBGRU"
          title="YouTube"
          className="group h-10 w-10 p-2 rounded-lg bg-white/10 hover:bg-white/15 transition">
          <Image
            width={24}
            height={24}
            src="/youtube.svg"
            alt="YouTube"
            title="Discord"
           className="w-6 h-6 opacity-85 group-hover:opacity-100 
                 transition duration-300 group-hover:scale-110
                 group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          />
          </a>
          <a href="https://discord.gg/battlegrounds"
          title="Discord"
          className="group h-10 w-10 p-2 rounded-lg bg-white/10 hover:bg-white/15 transition">
          <Image
            width={24}
            height={24}
            src="/discord.svg"
            alt="Discord"
            className="w-6 h-6 opacity-85 group-hover:opacity-100 
                 transition duration-300 group-hover:scale-110
                 group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          />
        </a>
        <a
          href="https://www.tiktok.com/@pubg_cis"
          title="TikTok"
          className="group p-2 h-10 w-10 rounded-lg bg-white/10 hover:bg-white/15 transition">
          <Image
            width={24}
            height={24}
            src="/tiktok.svg"
            alt="TikTok"
            className="w-6 h-6 opacity-85 group-hover:opacity-100 
                 transition duration-300 group-hover:scale-110
                 group-hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.35)]"
          />
        </a>
      </div>
      <div className="absolute flex flex-col right-20 text-[#dcdcdcd6] z-20 px-4 md:px-0">
        <p>© 2026 PUBG Weapon Hub</p>
        <p>Все данные взяты из открытых источников</p>
      </div>
    </footer>
  )
}

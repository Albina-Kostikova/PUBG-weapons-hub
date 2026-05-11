import Image from 'next/image'

type MapGuide = {
  id: string
  name: string
  image: string
  pace: string
  lootLevel: string
  summary: string
  dropZones: string[]
  hiddenSpots: string[]
}

const mapGuides: MapGuide[] = [
  {
    id: 'erangel',
    name: 'Erangel',
    image: '/img/ERANGELmap.png',
    pace: 'Универсальный темп для AR + DMR',
    lootLevel: 'Стабильный лут по всей карте',
    summary:
      'Самая классическая карта PUBG, где важны грамотная ротация, контроль позиций и понимание таймингов зоны. Здесь хватает как открытых пространств для дальних перестрелок, так и городов для напряжённых ближних боёв. Карта отлично подходит игрокам, которые любят сбалансированный геймплей и возможность адаптироваться под любую ситуацию.',
    dropZones: ['Pochinki', 'School', 'Sosnovka Military Base', 'Georgopol'],
    hiddenSpots: [
      'Severny с тихим стартом на севере',
      'Контейнеры у Georgopol вне главного маршрута',
      'Малые дома западнее Yasnaya для безопасного лута',
    ],
  },
  {
    id: 'miramar',
    name: 'Miramar',
    image: '/img/MIRAMARmap.png',
    pace: 'Много дальних перестрелок и игры от позиции',
    lootLevel: 'Сильный лут в городах и на возвышенностях',
    summary:
      'Miramar — карта для любителей дальнего боя, точной стрельбы и аккуратного перемещения между укрытиями. Большие открытые пространства делают любую ошибку в ротации опасной, а возвышенности часто дают серьёзное преимущество по информации и углам обзора. Здесь особенно ценятся DMR, снайперские винтовки и умение заранее просчитывать маршрут движения.',
    dropZones: ['Hacienda del Patron', 'Los Leones', 'Pecado', 'Power Grid'],
    hiddenSpots: [
      'Небольшие дома к северу от Pecado',
      'Крыши Chumacera для раннего обзора',
      'Склады между Power Grid и Los Leones',
    ],
  },
  {
    id: 'sanhok',
    name: 'Sanhok',
    image: '/img/SANHOKmap.png',
    pace: 'Агрессивный ближний и средний бой',
    lootLevel: 'Очень быстрый стартовый лут',
    summary:
      'Sanhok предлагает максимально быстрый и агрессивный темп матчей с постоянными перестрелками и минимальными паузами. Из-за компактного размера карты игроки часто сталкиваются уже в первые минуты после высадки, а густая растительность создаёт идеальные условия для неожиданных атак и третьих сторон. Эта карта отлично подходит тем, кто любит экшен и динамичные файты.',
    dropZones: ['Bootcamp', 'Paradise Resort', 'Pai Nan', 'Ruins'],
    hiddenSpots: [
      'Лагерь у реки западнее Pai Nan',
      'Крайние дома около Quarry',
      'Небольшие хижины южнее Paradise Resort',
    ],
  },
  {
    id: 'vikendi',
    name: 'Vikendi',
    image: '/img/VIKENDImap.png',
    pace: 'Чередование ближнего боя и контроля дальних углов',
    lootLevel: 'Хороший лут в центральных POI',
    summary:
      'Vikendi сочетает в себе снежные открытые участки, возвышенности и плотные зоны с большим количеством укрытий. Матчи на этой карте часто меняют темп: спокойная ротация может резко перейти в серию ближних перестрелок в зданиях или на склонах. Благодаря разнообразию ландшафта игрокам приходится быстро адаптироваться под меняющуюся дистанцию боя.',
    dropZones: ['Castle', 'Cosmodrome', 'Villa', 'Cement Factory'],
    hiddenSpots: [
      'Dino Park с обходом по внешнему кольцу',
      'Небольшие дачи севернее Villa',
      'Ледяные склады между Podvosto и Dobro Mesto',
    ],
  },
  {
    id: 'taego',
    name: 'Taego',
    image: '/img/TAEGOmap.png',
    pace: 'Средне-дальний бой с частыми сменами позиции',
    lootLevel: 'Мощные споты с хорошим шансом собрать полный набор',
    summary:
      'Taego выделяется своими широкими пространствами, длинными ротациями и высоким темпом столкновений по всей карте. Даже после спокойного старта игроки постоянно рискуют попасть под огонь во время передвижения между зонами. Карта поощряет активный поиск выгодных позиций, контроль транспорта и быструю реакцию на изменение ситуации.',
    dropZones: ['Terminal', 'Palace', 'Ho San', 'Wol Song'],
    hiddenSpots: [
      'Рисовые поля с малыми домами восточнее Palace',
      'Окраины Terminal вне центрального ангара',
      'Невысокие холмы южнее Kang Neung',
    ],
  },
  {
    id: 'deston',
    name: 'Deston',
    image: '/img/DESTONmap.png',
    pace: 'Резкие переходы от вертикального ближнего боя к дальнему контролю',
    lootLevel: 'Высокий уровень лута в крупных городских кластерах',
    summary:
      'Deston сочетает современные городские зоны с вертикальным геймплеем и большими открытыми территориями для дальних перестрелок. Игрокам приходится постоянно менять стиль игры: от зачистки зданий и крыш до контроля открытых направлений и ротаций. Карта особенно хорошо раскрывается при командной игре и грамотном использовании высоты.',
    dropZones: ['Ripton', 'Arena', 'Buxley', 'Assembly'],
    hiddenSpots: [
      'Крытые улицы на окраине Ripton',
      'Малые комплексы вокруг Cavala',
      'Домики у воды между Swamp и Buxley',
    ],
  },
  {
    id: 'rondo',
    name: 'Rondo',
    image: '/img/RONDOmap.png',
    pace: 'Тактический темп, где важны универсальные связки',
    lootLevel: 'Много сильных зон для лута в городской части',
    summary:
      'Rondo делает акцент на тактическом перемещении, контроле информации и грамотном выборе маршрутов. Большие расстояния между ключевыми точками интереса заставляют заранее продумывать ротации и следить за позициями противников. Карта хорошо подходит игрокам, предпочитающим размеренный, но напряжённый стиль игры с упором на позиционное преимущество.',
    dropZones: ['Jadena City', 'Stadium', 'Rin Jiang', 'Mey Ran'],
    hiddenSpots: [
      'Внешние кварталы Jadena City',
      'Небольшие строения у мостов',
      'Переходные дома между Stadium и Mey Ran',
    ],
  },
]

export default function PossibilityPage() {
  return (
    <div className="bg-[#111111]">
      <section className="pubg-section border-t-0 bg-[radial-gradient(circle_at_top,rgba(240,185,11,0.16),transparent_36%),linear-gradient(180deg,#161616_0%,#101010_100%)]">
        <div className="mx-auto w-[96vw] max-w-screen-2xl">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="inline-flex rounded-full border border-yellow-400/35 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-yellow-300">
                Weapon Map Guide
              </span>

              <h1 className="pubg-title mt-6 max-w-3xl text-3xl leading-tight md:text-5xl">
                Карты PUBG с оружием, рекомендациями <br></br>и зонами для высадки
              </h1>

              <p className="pubg-subtitle mt-5 max-w-2xl text-base leading-7 md:text-lg">
                Большие схемы карт, короткие ориентиры по стилю игры и ключевые точки, куда прыгать в начале катки.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Карт', value: String(mapGuides.length) },
                  { label: 'Больших зон', value: '7' },
                  { label: 'Горячих спотов', value: '28' },
                ].map(stat => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[#303030] bg-[#171717]/90 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                    <p className="text-2xl font-black uppercase tracking-[0.16em] text-yellow-400">{stat.value}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#a6a6a6]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {mapGuides.slice(0, 4).map((map, index) => (
                <a
                  key={map.id}
                  href={`#${map.id}`}
                  className="group relative overflow-hidden rounded-[15px] border border-[#363636] bg-[#171717]">
                  <Image
                    width={1200}
                    height={800}
                    src={map.image}
                    alt={map.name}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                    decoding="async"
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                    <h2 className="text-2xl font-black uppercase tracking-[0.16em] text-white">{map.name}</h2>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <nav className="sticky top-18 z-30 border-y border-[#2a2a2a] bg-[#0f0f0ff2] backdrop-blur-md">
        <div className="pubg-container">
          <ul className="flex gap-2 overflow-x-auto py-3 scrollbar-none">
            {mapGuides.map(map => (
              <li key={map.id} className="shrink-0">
                <a
                  href={`#${map.id}`}
                  className="block rounded-full border border-[#333] bg-[#171717] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d8d8d8] transition hover:border-yellow-400/60 hover:bg-yellow-400/10 hover:text-yellow-300">
                  {map.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="pubg-section bg-[#151515]">
        <div className="mx-auto w-[96vw] max-w-screen-2xl space-y-10">
          {mapGuides.map((map, index) => (
            <article
              key={map.id}
              id={map.id}
              className="scroll-mt-36 overflow-hidden rounded-2xl border border-[#2f2f2f] bg-[#111111] shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
              <div className="grid gap-0 lg:grid-cols-[1.35fr_0.65fr]">
                <div className="relative min-h-70 border-b border-[#2b2b2b] lg:min-h-[78vh] lg:border-r lg:border-b-0">
                  <Image
                    fill
                    src={map.image}
                    alt={map.name}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />

                  <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
                    <div className="z-10 w-fit rounded-3xl border border-white/10 bg-black/30 px-5 py-4 backdrop-blur-sm">
                      <h2 className="text-3xl font-black uppercase tracking-[0.16em] text-white md:text-5xl">
                        {map.name}
                      </h2>
                    </div>

                    <div />
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <div className="grid gap-4">
                      <div className="rounded-xl border border-[#2d2d2d] bg-[#171717] p-5">
                        <p className="text-base font-bold uppercase tracking-[0.22em] text-yellow-400">Обзор карты</p>
                        <p className="mt-3 text-base leading-7 text-[#e2e2e2]">{map.summary}</p>
                        <p className="text-base mt-5 font-bold uppercase tracking-[0.22em] text-yellow-400">
                          Главные точки
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {map.dropZones.map(zone => (
                            <span
                              key={zone}
                              className="rounded-full border border-[#393939] bg-[#111111] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#e4e4e4]">
                              {zone}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-6">
                    <div className="rounded-xl border border-[#2d2d2d] bg-[#171717] p-5">
                      <p className="text-base font-bold uppercase tracking-[0.22em] text-yellow-400">
                        Интересные места
                      </p>
                      <div className="mt-4 grid gap-3">
                        {map.hiddenSpots.map(spot => (
                          <div
                            key={spot}
                            className="rounded-xl border border-[#393939] bg-[#111111] px-4 py-3 text-base leading-6 text-[#d6d6d6]">
                            {spot}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

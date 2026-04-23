'use client'

import { useMemo, useState } from 'react'
import weaponsData from '@/data/weapons.json'
import type { Weapon } from '@/types/items'

type RangeMode = 'close' | 'medium' | 'long'

const RANGE_LABELS: Record<RangeMode, string> = {
  close: 'Ближний бой',
  medium: 'Средний бой',
  long: 'Дальний бой',
}

function getWeaponComment(weapon: Weapon, range: RangeMode): string {
  const type = weapon.type
  const dmg = weapon.damage

  if (range === 'close') {
    if (type === 'SMG')
      return `${weapon.name} — отличный выбор для ближнего боя. Высокая скорострельность и манёвренность позволяют доминировать на короткой дистанции.`
    if (type === 'SG')
      return `${weapon.name} — дробовик создан для ближнего боя. Критический урон в упор делает его смертоносным в помещениях.`
    if (type === 'AR')
      return `${weapon.name} — штурмовая винтовка справляется с ближним боем, но уступает SMG по скорострельности. Урон ${dmg} помогает компенсировать.`
    if (type === 'DMR')
      return `${weapon.name} — на ближней дистанции DMR неудобна из-за медленного темпа стрельбы. Следует избегать таких столкновений.`
    if (type === 'SR')
      return `${weapon.name} — снайперская винтовка крайне неэффективна в ближнем бою. Переключитесь на пистолет.`
    return `${weapon.name} (урон ${dmg}) — использовать с осторожностью на ближней дистанции.`
  }

  if (range === 'medium') {
    if (type === 'AR')
      return `${weapon.name} — идеальное оружие для среднего боя. Урон ${dmg} в сочетании с контролируемой отдачей делает его универсальным инструментом.`
    if (type === 'DMR')
      return `${weapon.name} — DMR превосходит AR на средней дистанции. Точные выстрелы с уроном ${dmg} способны снять врага за 2–3 попадания.`
    if (type === 'SMG')
      return `${weapon.name} — SMG начинает терять эффективность на средней дистанции из-за разброса. Подходит лишь при отсутствии альтернатив.`
    if (type === 'SR')
      return `${weapon.name} — снайперская винтовка работает и на средней дистанции, но одиночный огонь снижает DPS в перестрелках.`
    if (type === 'SG')
      return `${weapon.name} — дробовик на средней дистанции теряет большую часть урона. Крайне не рекомендуется.`
    return `${weapon.name} (урон ${dmg}) — приемлем на средней дистанции.`
  }

  // long
  if (type === 'SR')
    return `${weapon.name} — снайперская винтовка с уроном ${dmg} абсолютно доминирует на длинной дистанции. Один точный выстрел часто решает исход боя.`
  if (type === 'DMR')
    return `${weapon.name} — DMR на дальней дистанции позволяет вести точную полуавтоматическую стрельбу. Урон ${dmg} обеспечивает быстрое уничтожение цели.`
  if (type === 'AR')
    return `${weapon.name} — на дальней дистанции AR теряет точность из-за разброса. Одиночная стрельба с уроном ${dmg} — единственный вариант.`
  if (type === 'SMG')
    return `${weapon.name} — SMG на дальней дистанции практически бесполезна. Высокий разброс сводит урон к минимуму.`
  if (type === 'SG')
    return `${weapon.name} — дробовик на дальней дистанции не наносит урона. Избегайте таких столкновений.`
  return `${weapon.name} (урон ${dmg}) — ограниченная эффективность на дальней дистанции.`
}

export default function BattlePage() {
  const [leftWeapon, setLeftWeapon] = useState<Weapon | null>(null)
  const [rightWeapon, setRightWeapon] = useState<Weapon | null>(null)
  const [rangeMode, setRangeMode] = useState<RangeMode>('medium')
  const [search, setSearch] = useState('')
  const [selectTarget, setSelectTarget] = useState<'left' | 'right'>('left')

  const sortedWeapons = useMemo(() => [...weaponsData.weapons].sort((a, b) => b.damage - a.damage), [])

  const handleSelectWeapon = (weapon: Weapon) => {
    if (selectTarget === 'left') {
      setLeftWeapon(weapon)
      setSelectTarget('right')
    } else {
      setRightWeapon(weapon)
      setSelectTarget('left')
    }
  }

  const isMatched = (name: string) => {
    const q = search.trim().toLowerCase()
    return q ? name.toLowerCase().includes(q) : false
  }

  const WeaponSlot = ({ side, weapon }: { side: 'left' | 'right'; weapon: Weapon | null }) => {
    const isActive = selectTarget === side
    return (
      <div
        onClick={() => setSelectTarget(side)}
        className={`pubg-card p-4 cursor-pointer min-h-50 flex flex-col items-center justify-center transition-all ${
          isActive ? 'border-[#f0b90b] shadow-[0_0_16px_rgba(240,185,11,0.18)]' : ''
        }`}>
        {weapon ? (
          <div className="relative w-full min-h-52 overflow-hidden rounded-sm border border-[#2f2f2f] bg-[#171717] p-3">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#121212]/95 to-transparent" />
            <div className="relative z-10 w-[58%]">
              <h3 className="pubg-title text-sm mb-3 text-left">{weapon.name}</h3>
              <div className="text-xs text-[#cfcfcf] space-y-1 max-w-45">
                <div className="flex justify-between gap-4">
                  <span>Тип:</span>
                  <span className="text-[#f5f5f5] font-semibold">{weapon.type}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Патрон:</span>
                  <span className="text-[#f5f5f5] font-semibold">{weapon.ammo}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Урон:</span>
                  <span className="text-[#f0b90b] font-bold text-sm">{weapon.damage}</span>
                </div>
              </div>
              {isActive && <p className="mt-3 text-[10px] text-[#f0b90b] uppercase tracking-wider">Активный слот</p>}
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-0 flex w-[60%] items-center justify-end pr-1">
              <div className="absolute right-2 h-36 w-36 rounded-full bg-[#fff8d6]/35 blur-2xl" />
              <img
                src={weapon.image}
                alt={weapon.name}
                className={`h-44 w-auto object-contain drop-shadow-[0_12px_22px_rgba(0,0,0,0.65)] ${
                  isActive ? 'opacity-85' : 'opacity-70'
                }`}
              />
            </div>
          </div>
        ) : (
          <div className="text-center text-[#555] select-none">
            <p className="text-4xl mb-2 font-thin">+</p>
            <p className="text-xs uppercase tracking-wider">{side === 'left' ? 'Оружие 1' : 'Оружие 2'}</p>
            {isActive && <p className="mt-2 text-[10px] text-[#f0b90b] uppercase tracking-wider">Выберите из списка</p>}
          </div>
        )}
      </div>
    )
  }

  return (
    <section className="pubg-section">
      <div className="pubg-container">
        <h2 className="pubg-title text-center text-2xl md:text-3xl mb-8">Битва оружий</h2>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <WeaponSlot side="left" weapon={leftWeapon} />
          <WeaponSlot side="right" weapon={rightWeapon} />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4 mb-6">
          <div className="pubg-card p-5">
            <h3 className="pubg-title text-sm mb-3 text-blue-300">{leftWeapon ? leftWeapon.name : 'Оружие 1'}</h3>
            {leftWeapon ? (
              <p className="text-base text-[#d6d6d6] leading-relaxed">{getWeaponComment(leftWeapon, rangeMode)}</p>
            ) : (
              <p className="text-[#444] text-base">Оружие не выбрано</p>
            )}
          </div>
          <div className="pubg-card p-5">
            <h3 className="pubg-title text-sm mb-3 text-red-300">{rightWeapon ? rightWeapon.name : 'Оружие 2'}</h3>
            {rightWeapon ? (
              <p className="text-base text-[#d6d6d6] leading-relaxed">{getWeaponComment(rightWeapon, rangeMode)}</p>
            ) : (
              <p className="text-[#444] text-base">Оружие не выбрано</p>
            )}
          </div>
        </div>

        <div className="flex justify-center gap-2 mb-6">
          {(['close', 'medium', 'long'] as RangeMode[]).map(mode => (
            <button
              key={mode}
              type="button"
              onClick={() => setRangeMode(mode)}
              className={`px-5 py-2 rounded-sm border text-xs font-semibold uppercase tracking-wider transition ${
                rangeMode === mode
                  ? 'border-[#f0b90b] bg-[#2a2412] text-[#f0b90b]'
                  : 'border-[#444] bg-[#1f1f1f] text-[#cfcfcf] hover:border-[#666]'
              }`}>
              {RANGE_LABELS[mode]}
            </button>
          ))}
        </div>
          
        <div className="mb-4 text-center">
          <input
            type="text"
            placeholder="Поиск по названию..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-[40%] rounded-sm border border-[#444] bg-[#1f1f1f] px-4 py-2 text-sm text-[#cfcfcf] focus:outline-none focus:ring-2 focus:ring-[#f0b90b]/50"
          />
        </div>
          
        <div className="pubg-card p-4 mb-6">
          <h3 className="pubg-title text-sm mb-3 text-[#cfcfcf]">Все оружие — по убыванию урона</h3>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8">
            {sortedWeapons.map(weapon => {
              const isLeft = leftWeapon?.name === weapon.name
              const isRight = rightWeapon?.name === weapon.name
              const match = isMatched(weapon.name)
              return (
                <button
                  key={weapon.name}
                  type="button"
                  onClick={() => handleSelectWeapon(weapon as Weapon)}
                  className={`rounded-sm border px-2 py-2 text-left text-xs transition ${
                    isLeft
                      ? 'border-blue-400 bg-blue-950/40 text-blue-200'
                      : isRight
                        ? 'border-red-400 bg-red-950/40 text-red-200'
                        : match
                          ? 'border-orange-400 bg-orange-950/40'
                          : 'border-[#444] bg-[#1f1f1f] hover:border-[#666]'
                  }`}>
                  <p className="font-semibold text-[#f5f5f5] leading-tight">{weapon.name}</p>
                  <p className="text-[#999] mt-0.5">Урон: {weapon.damage}</p>
                </button>
              )
            })}
          </div>
        </div>

        
      </div>
    </section>
  )
}

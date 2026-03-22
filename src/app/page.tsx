'use client';
import React from "react";
import weaponsData from "../data/weapons.json"; 
import WeaponCard from "@/components/WeaponCard";

export default function Home() {
  const sortedWeapons = [...weaponsData.weapons].sort(
    (a, b) => b.damage - a.damage
  ).slice(0, 20);

  return (
    <div className="w-full m-6">

      <section className="pubg-section">
        <div className="pubg-container">
          <h2 className="pubg-title mb-3 text-center text-2xl md:text-3xl">
            Выбери подготовку
          </h2>

          <p className="pubg-subtitle mb-10 text-center">
            Подготовься к королевской битве
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { title: "Собрать свой набор", link: "/build" },
              { title: "Битва оружий", link: "/battle" },
              { title: "Вероятность найти оружие", link: "/possibility" },
              { title: "Реальные цены", link: "/prices" },
            ].map((btn, idx) => (
              <a
                key={idx}
                href={btn.link}
                className="pubg-hero-action relative flex h-20 w-60 items-center justify-center p-3 text-center text-xs md:h-40 md:w-40 md:text-sm"
              >
                {btn.title}
                <span className="absolute inset-0 border-4 border-yellow-400 animate-ping"></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="pubg-section bg-[#171717]">
        <div className="pubg-container">
          <h2 className="pubg-title mb-10 text-center text-2xl md:text-3xl">
            Категории оружия
          </h2>

          <div className="grid grid-cols-2 gap-7 md:grid-cols-4">
            {sortedWeapons.map((weapon) => (
              <WeaponCard key={weapon.name} weapon={weapon} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
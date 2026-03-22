'use client';
import React from "react";
import { Weapon } from "../types/items";
interface Props {
  weapon: Weapon;
}
export default function WeaponCard({ weapon }: Props) {
  return (
    <div className="group relative w-full max-w-55">
      <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-yellow-500/0 via-yellow-500/40 to-yellow-500/0 blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-4 flex flex-col items-center transition duration-300 group-hover:border-yellow-400 group-hover:scale-105">
        <div className="relative">
          <img
            src={weapon.image}
            alt={weapon.name}
            className="h-24 w-24 object-contain transition duration-300 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-2 bg-yellow-400/30 blur-xl opacity-0 group-hover:opacity-100 transition"></div>
        </div>
        <h3 className="mt-4 text-center text-sm font-semibold tracking-wide text-white group-hover:text-yellow-400 transition">
          {weapon.name}
        </h3>
        <div className="mt-2 text-center text-xs text-gray-400 space-y-1">
          <p>Тип: <span className="text-gray-200">{weapon.type}</span></p>
          <p>Урон: <span className="text-gray-200">{weapon.damage}</span></p>
        </div>
        <div className="mt-3 h-0.5 w-full bg-linear-to-r from-transparent via-yellow-400 to-transparent opacity-40 group-hover:opacity-100 transition"></div>
        <button className="mt-4 text-xs uppercase tracking-widest text-yellow-400 opacity-0 group-hover:opacity-100 transition">
          Подробнее →
        </button>
      </div>
    </div>
  );
}
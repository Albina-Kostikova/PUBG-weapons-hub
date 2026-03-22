import { Weapon, Stock, Muzzle, Magazine, Grip, Attachment } from "@/types/items";

export interface WeaponSetup {
  weapon: Weapon;
  stock?: Stock;
  muzzle?: Muzzle;
  magazine?: Magazine;
  grip?: Grip;
  attachment?: Attachment;
}

export function calculateScore(setup: WeaponSetup) {
  const { weapon, stock, muzzle, magazine, grip, attachment } = setup;

  let damage = weapon.damage ?? 0;
  let recoilVertical = 0;
  let recoilHorizontal = 0;
  let accuracy = 0;
  let adsSpeed = 0;
  let stability = 0;
  let capacityBonus = 0;
  let reloadSpeedBonus = 0;
  let soundReduction = 0;
  let weight = 0;

  if (stock) {
    recoilVertical += stock.recoilVertical;
    recoilHorizontal += stock.recoilHorizontal;
    adsSpeed += stock.adsSpeed;
    weight += stock.weight;
  }

  if (muzzle) {
    recoilVertical += muzzle.recoilVertical;
    recoilHorizontal += muzzle.recoilHorizontal;
    soundReduction += muzzle.soundReduction;
    weight += muzzle.weight;
  }

  if (magazine) {
    capacityBonus += magazine.capacityBonus;
    reloadSpeedBonus += magazine.reloadSpeedBonus;
    weight += magazine.weight;
  }

  if (grip) {
    recoilVertical += grip.recoilVertical;
    recoilHorizontal += grip.recoilHorizontal;
    adsSpeed += grip.adsSpeed;
    stability += grip.stability;
  }

  if (attachment) {
    accuracy += attachment.accuracyBonus;
    recoilVertical += attachment.recoilControl;
    recoilHorizontal += attachment.recoilControl;
    weight += attachment.weight;
  }

  const score =
    damage * 2 + 
    accuracy * 1.5 +
    stability * 1.2 +
    capacityBonus * 0.8 -
    (recoilVertical + recoilHorizontal) * 1.5 -
    weight * 0.5 +
    reloadSpeedBonus * 1.0 +
    adsSpeed * 1.0 +
    soundReduction * 0.7
    ;

  return Math.round(score);
}
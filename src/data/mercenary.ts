export type Mercenary = {
  name: string;
  class: string;
  level: number;
  description: string;
  faction: string;
  goldCost: number;
  woodCost: number;
  icon: string;
  stats: {
    health: number;
    minDamage: number;
    maxDamage: number;
    siegeDamage: number;
    armor: number;
    range: number;
    moveSpeed: number;
  };
  abilities: {
    name: string;
    effect: string;
    icon: string;
    type: 'Active' | 'Passive';
  }[];
};

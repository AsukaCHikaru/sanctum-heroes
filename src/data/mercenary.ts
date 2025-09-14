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

export const MERCENARIES: Mercenary[] = [
  {
    name: '步兵',
    class: '重步兵',
    level: 1,
    faction: 'alliance',
    goldCost: 70,
    woodCost: 2,
    description:
      '等級一的重步兵。重步兵能對騎兵造成強大傷害，但是無法抵擋法師的攻擊。人類的重步兵具有舉盾技能。',
    icon: 'al_heavy_infantry.jpg',
    stats: {
      health: 500,
      minDamage: 12,
      maxDamage: 13,
      siegeDamage: 2,
      armor: 5,
      range: 90,
      moveSpeed: 280,
    },
    abilities: [
      {
        name: '開關攻擊加成',
        effect: '攻擊開關時造成額外4點傷害。',
        icon: 'al_heavy_infantry_01.jpg',
        type: 'Passive',
      },
      {
        name: '尖刺裝甲',
        effect: '重步兵盔甲上的尖刺能使攻擊他的敵人受傷，反彈15%傷害。',
        icon: 'al_heavy_infantry_02.jpg',
        type: 'Passive',
      },
      {
        name: '舉盾',
        effect:
          '啟動時可擁有30%的機率反彈攻擊來源的穿刺攻擊，就算受到攻擊，也僅會受到75%的傷害。當防禦技能啟動時，移動速度會減緩為一般速度的30%。',
        icon: 'al_heavy_infantry_03.jpg',
        type: 'Active',
      },
    ],
  },
  {
    name: '步兵隊長',
    class: '重步兵',
    level: 2,
    faction: 'alliance',
    goldCost: 120,
    woodCost: 3,
    description:
      'LV2傭兵具有10%魔法抵抗。等級二的重步兵。重步兵能對騎兵造成強大傷害，但是無法抵擋法師的攻擊。人類的重步兵具有舉盾技能。',
    icon: 'al_heavy_infantry_captain.jpg',
    stats: {
      health: 750,
      minDamage: 24,
      maxDamage: 25,
      siegeDamage: 2,
      armor: 8,
      range: 100,
      moveSpeed: 280,
    },
    abilities: [
      {
        name: '開關攻擊加成',
        effect: '攻擊開關時造成額外6點傷害。',
        icon: 'al_heavy_infantry_captain_01.jpg',
        type: 'Passive',
      },
      {
        name: '尖刺裝甲',
        effect: '重步兵盔甲上的尖刺能使攻擊他的敵人受傷，反彈15%傷害。',
        icon: 'al_heavy_infantry_captain_02.jpg',
        type: 'Passive',
      },
      {
        name: '舉盾',
        effect:
          '啟動時可擁有30%的機率反彈攻擊來源的穿刺攻擊，就算受到攻擊，也僅會受到75%的傷害。當防禦技能啟動時，移動速度會減緩為一般速度的30%。',
        icon: 'al_heavy_infantry_captain_03.jpg',
        type: 'Active',
      },
    ],
  },
  {
    name: '銀掌騎士',
    class: '重步兵',
    level: 3,
    faction: 'alliance',
    goldCost: 200,
    woodCost: 6,
    description:
      'LV3傭兵具有20%魔法抵抗。等級三的重步兵。重步兵能對騎兵造成強大傷害，但是無法抵擋法師的攻擊。人類的重步兵具有舉盾技能。',
    icon: 'al_heavy_infantry_pal.jpg',
    stats: {
      health: 900,
      minDamage: 36,
      maxDamage: 37,
      siegeDamage: 2,
      armor: 15,
      range: 90,
      moveSpeed: 280,
    },
    abilities: [
      {
        name: '開關攻擊加成',
        effect: '攻擊開關時造成額外4點傷害。',
        icon: 'al_heavy_infantry_pal_01.jpg',
        type: 'Passive',
      },
      {
        name: '尖刺裝甲',
        effect: '重步兵盔甲上的尖刺能使攻擊他的敵人受傷，反彈45%傷害。',
        icon: 'al_heavy_infantry_pal_02.jpg',
        type: 'Passive',
      },
      {
        name: '舉盾',
        effect:
          '啟動時可擁有40%的機率反彈攻擊來源的穿刺攻擊，就算受到攻擊，也僅會受到45%的傷害。當防禦技能啟動時，移動速度會減緩為一般速度的30%。',
        icon: 'al_heavy_infantry_pal_03.jpg',
        type: 'Active',
      },
    ],
  },
  {
    name: '殭屍',
    class: '重步兵',
    level: 1,
    faction: 'undead',
    goldCost: 40,
    woodCost: 2,
    description:
      '等級一的重步兵。重步兵能對騎兵造成強大傷害，但是無法抵擋法師的攻擊。不死族的重步兵具有鈍擊技能。',
    icon: 'ud_zombie.jpg',
    stats: {
      health: 500,
      minDamage: 12,
      maxDamage: 13,
      siegeDamage: 2,
      armor: 5,
      range: 100,
      moveSpeed: 230,
    },
    abilities: [
      {
        name: '開關攻擊加成',
        effect: '攻擊開關時造成額外2點傷害。',
        icon: 'ud_zombie_01.jpg',
        type: 'Passive',
      },
      {
        name: '尖刺裝甲',
        effect: '重步兵盔甲上的尖刺能使攻擊他的敵人受傷，反彈15%傷害。',
        icon: 'ud_zombie_02.jpg',
        type: 'Passive',
      },
      {
        name: '鈍擊',
        effect: '將有15%的機會讓攻擊增加15的破壞力，並有機會將敵人震昏0.5秒。',
        icon: 'ud_zombie_03.jpg',
        type: 'Passive',
      },
    ],
  },
];

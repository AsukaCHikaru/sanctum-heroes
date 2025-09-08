type ItemTypeBase = {
  name: string;
  description: string;
  effect: string;
  icon: string;
  goldCost: number;
  woodCost: number;
  abilityStats: {
    label: string;
    value: number[] | number;
  }[];
};
type EliteItem = ItemTypeBase & {
  recipe: BaseItem[];
};
type BaseItem = ItemTypeBase & {
  buildsInto: EliteItem[];
};
export type Item = BaseItem | EliteItem;

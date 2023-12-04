export enum CardCategory {
  Attack,
  Reaction,
  Throughtout,
  Enchantment,
  Action,
}

export enum CardType {
  Normal,
  Ultimate,
}

export abstract class Card {
  attackLife: number;
  attackAura: number;
  range: number;
  category: CardCategory;
  type: CardType;
}

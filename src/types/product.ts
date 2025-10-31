export type Rarity = 'common' | 'rare' | 'legendary' | 'godly';
export type Category = 'knife' | 'gun';

export interface Product {
  id: number;
  name: string;
  price: number;
  rarity: Rarity;
  category: Category;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

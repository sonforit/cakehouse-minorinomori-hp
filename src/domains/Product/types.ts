export type PriceItem = {
  label: string;
  price: number;
};

export type Category = {
  name: string;
  slug: string;
};

export type Initializer = {
  id: string;
  name: string;
  slug: string;
  category: Category;
  prices: PriceItem[];
  imageUrl: string;
  description: string;
  notes: string[];
  createdAt: Date;
};

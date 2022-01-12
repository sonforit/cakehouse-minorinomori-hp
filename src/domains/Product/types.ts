export type PriceItem = {
  type?: string;
  price: number;
};

export type ProductInitializer = {
  slug: string;
  name: string;
  prices: PriceItem[];
  imageUrl: string;
  description: string;
  createdAt: Date;
};

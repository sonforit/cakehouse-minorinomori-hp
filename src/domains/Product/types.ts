export type PriceItem = {
  type?: string;
  price: number;
};

export type ProductInitializer = {
  id: string;
  name: string;
  prices: PriceItem[];
  imageUrls: string[];
  description: string;
  createdAt: Date;
};

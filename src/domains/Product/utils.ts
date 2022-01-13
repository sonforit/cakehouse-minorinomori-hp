import { differenceInDays } from 'date-fns';
import { PriceItem } from './types';
import { IProductFields } from '@/types/contentful';
import { Entry } from 'contentful';
import { Product } from '@/domains/Product';

export const checkIsNew = (baseDate: Date, createdAt: Date): boolean => {
  const passedDaysFromCreated = differenceInDays(baseDate, createdAt);
  return passedDaysFromCreated < 5;
};

export const createPriceLabel = (prices: PriceItem[]): string => {
  return `¥${prices[0].price.toLocaleString()}(税抜)${prices.length > 1 ? '~' : '-'}`;
};

export const convertProduct = (product: Entry<IProductFields>) => {
  const { name, slug, category, prices, imageUrl, description, notes, createdAt } = product.fields;
  return new Product({
    name,
    slug,
    category: {
      name: category.fields.name as string,
      slug: category.fields.slug as string,
    },
    prices: prices.map((priceItem) => {
      const [label, price] = priceItem.split(',');
      return {
        label,
        price: parseInt(price, 10),
      };
    }),
    imageUrl: `https:${imageUrl.fields.file.url}`,
    description: description || '',
    notes: notes || [],
    createdAt: new Date(createdAt),
  });
};

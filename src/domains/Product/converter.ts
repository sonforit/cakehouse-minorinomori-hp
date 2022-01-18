import { IProductFields } from '@/types/contentful';
import { Entry } from 'contentful';
import { Product } from '@/domains/Product';

export const convertProduct = (product: Entry<IProductFields>) => {
  const { name, slug, category, prices, imageUrl, description, notes, createdAt } = product.fields;
  return new Product({
    id: product.sys.id,
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

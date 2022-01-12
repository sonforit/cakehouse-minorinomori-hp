import { checkIsNew, createPriceLabel } from './utils';
import { ProductInitializer } from './types';

export class Product {
  slug: ProductInitializer['slug'] = '';
  name: ProductInitializer['name'] = '';
  prices: ProductInitializer['prices'] = [];
  imageUrl: ProductInitializer['imageUrl'] = '';
  description: ProductInitializer['description'] = '';
  createdAt: ProductInitializer['createdAt'] = new Date();

  constructor(initialValues: ProductInitializer) {
    Object.assign(this, initialValues);
  }

  getIsNew = () => checkIsNew(new Date(), this.createdAt);

  getPriceLabel = () => createPriceLabel(this.prices);
}

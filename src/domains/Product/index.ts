import { checkIsNew, createPriceLabel } from './utils';
import { ProductInitializer } from './types';

export class Product {
  id: ProductInitializer['id'] = '';
  name: ProductInitializer['name'] = '';
  prices: ProductInitializer['prices'] = [];
  imageUrls: ProductInitializer['imageUrls'] = [];
  description: ProductInitializer['description'] = '';
  createdAt: ProductInitializer['createdAt'] = new Date();

  constructor(initialValues: ProductInitializer) {
    Object.assign(this, initialValues);
  }

  getIsNew = () => checkIsNew(new Date(), this.createdAt);

  getPriceLabel = () => createPriceLabel(this.prices);
}

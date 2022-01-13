import { checkIsNew, createPriceLabel } from './utils';
import { ProductInitializer } from './types';

export class Product {
  private _name: ProductInitializer['name'] = '';
  private _slug: ProductInitializer['slug'] = '';
  private _category: ProductInitializer['category'] = { name: '', slug: '' };
  private _prices: ProductInitializer['prices'] = [];
  private _imageUrl: ProductInitializer['imageUrl'] = '';
  private _description: ProductInitializer['description'] = '';
  private _notes: ProductInitializer['notes'] = [];
  private _createdAt: ProductInitializer['createdAt'] = new Date();

  constructor(initialValues: ProductInitializer) {
    this._name = initialValues.name;
    this._slug = initialValues.slug;
    this._category = initialValues.category;
    this._prices = initialValues.prices;
    this._imageUrl = initialValues.imageUrl;
    this._description = initialValues.description;
    this._notes = initialValues.notes;
    this._createdAt = initialValues.createdAt;
  }

  get name() {
    return this._name;
  }
  get slug() {
    return this._slug;
  }
  get category() {
    return this._category;
  }
  get prices() {
    return this._prices;
  }
  get imageUrl() {
    return this._imageUrl;
  }
  get description() {
    return this._description;
  }
  get notes() {
    return this._notes;
  }
  get createdAt() {
    return this._createdAt;
  }
  get isNew() {
    return checkIsNew(new Date(), this.createdAt);
  }
  get minPriceLabel() {
    return createPriceLabel(this._prices);
  }
}

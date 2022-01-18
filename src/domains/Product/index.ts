import { checkIsNew, createPriceLabel } from './utils';
import { Initializer } from './types';

export class Product {
  private _id: Initializer['id'] = '';
  private _name: Initializer['name'] = '';
  private _slug: Initializer['slug'] = '';
  private _category: Initializer['category'] = { name: '', slug: '' };
  private _prices: Initializer['prices'] = [];
  private _imageUrl: Initializer['imageUrl'] = '';
  private _description: Initializer['description'] = '';
  private _notes: Initializer['notes'] = [];
  private _createdAt: Initializer['createdAt'] = new Date();

  constructor(initialValues: Initializer) {
    this._id = initialValues.id;
    this._name = initialValues.name;
    this._slug = initialValues.slug;
    this._category = initialValues.category;
    this._prices = initialValues.prices;
    this._imageUrl = initialValues.imageUrl;
    this._description = initialValues.description;
    this._notes = initialValues.notes;
    this._createdAt = initialValues.createdAt;
  }

  get id() {
    return this._id;
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

import { checkIsNew, createPostedAtLabel } from './utils';
import { ProductInitializer } from './types';

export class News {
  private _title: ProductInitializer['title'] = '';
  private _content: ProductInitializer['content'] = '';
  private _postedAt: ProductInitializer['postedAt'] = new Date();

  constructor(initialValues: ProductInitializer) {
    this._title = initialValues.title;
    this._content = initialValues.content;
    this._postedAt = initialValues.postedAt;
  }

  get title() {
    return this._title;
  }
  get content() {
    return this._content;
  }
  get postedAt() {
    return this._postedAt;
  }
  get isNew() {
    return checkIsNew(new Date(), this._postedAt);
  }
  get postedAtLabel() {
    return createPostedAtLabel(this._postedAt);
  }
}

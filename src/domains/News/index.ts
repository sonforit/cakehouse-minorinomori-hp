import { checkIsNew, createPostedAtLabel } from './utils';
import { Initializer } from './types';

export class News {
  private _id: Initializer['id'] = '';
  private _title: Initializer['title'] = '';
  private _content: Initializer['content'] = '';
  private _postedAt: Initializer['postedAt'] = new Date();

  constructor(initialValues: Initializer) {
    this._id = initialValues.id;
    this._title = initialValues.title;
    this._content = initialValues.content;
    this._postedAt = initialValues.postedAt;
  }

  get id() {
    return this._id;
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

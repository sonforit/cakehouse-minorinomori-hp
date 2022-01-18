import { INewsFields } from '@/types/contentful';
import { Entry } from 'contentful';
import { News } from './index';

export const convertNews = (news: Entry<INewsFields>) => {
  const { title, content, postedAt } = news.fields;
  return new News({
    title,
    content,
    postedAt: new Date(postedAt),
  });
};

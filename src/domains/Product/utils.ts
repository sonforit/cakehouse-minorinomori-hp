import { differenceInDays } from 'date-fns';
import { PriceItem } from './types';

export const checkIsNew = (baseDate: Date, createdAt: Date): boolean => {
  const passedDaysFromCreated = differenceInDays(baseDate, createdAt);
  return passedDaysFromCreated < 5;
};

export const createPriceLabel = (prices: PriceItem[]): string => {
  return `¥${prices[0].price.toLocaleString()}(税抜) ${prices.length > 1 ? '~' : '-'}`;
};

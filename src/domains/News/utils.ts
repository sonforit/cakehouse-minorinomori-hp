import { differenceInDays, format } from 'date-fns';

export const checkIsNew = (baseDate: Date, postedAt: Date): boolean => {
  const passedDaysFromPosted = differenceInDays(baseDate, postedAt);
  return passedDaysFromPosted < 5;
};

export const createPostedAtLabel = (postedAt: Date): string => {
  return format(postedAt, 'yyyy.MM.dd');
};

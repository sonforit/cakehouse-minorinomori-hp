import { differenceInDays } from 'date-fns';

export const checkIsNew = (baseDate: Date, postedAt: Date): boolean => {
  const passedDaysFromPosted = differenceInDays(baseDate, postedAt);
  return passedDaysFromPosted < 5;
};

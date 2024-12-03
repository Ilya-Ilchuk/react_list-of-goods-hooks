import { SortByFields } from '../enums/sortFields';

export const getVisibleGoods = (
  goods: string[],
  sortType: SortByFields,
  isReversed: boolean,
): string[] => {
  const sortedGoods: string[] = [...goods];

  if (sortType === SortByFields.Alphabetic) {
    sortedGoods.sort((a: string, b: string): number => a.localeCompare(b));
  } else if (sortType === SortByFields.Length) {
    sortedGoods.sort((a: string, b: string): number => a.length - b.length);
  }

  if (isReversed) {
    sortedGoods.reverse();
  }

  return sortedGoods;
};

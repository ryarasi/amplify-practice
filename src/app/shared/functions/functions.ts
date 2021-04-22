import { MatSelectOption } from '../models';

export const getOptionLabel = (
  value: string,
  options: MatSelectOption[]
): string => {
  const option = options.find((o) => o.value === value);
  if (option) {
    return option.label;
  } else return undefined;
};

export const setNextToken = (paginationTokens: object, pageIndex: number) => {
  return paginationTokens[pageIndex];
};

export const setPaginationTokens = (
  paginationTokens: object,
  nextToken: string
): object => {
  const tokensArray = Object.values(paginationTokens);
  const nextTokenExists = tokensArray.includes(nextToken);
  if (nextTokenExists) {
    return paginationTokens;
  } else {
    paginationTokens = Object.assign({}, paginationTokens);
    paginationTokens[tokensArray.length + 1] = nextToken;
    return paginationTokens;
  }
};

export const disablePaginationButtons = (
  paginationTokens: object,
  nextToken: string,
  pageIndex: number
): any => {
  return {
    previousPageDisabled: pageIndex == 1 ? true : false,
    nextPageDisabled: nextToken == null ? true : false,
  };
};

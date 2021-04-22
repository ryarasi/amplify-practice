import { NEXT_PAGE, PREVIOUS_PAGE } from '../common/constants';
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

export const setNextToken = (
  prevOrNext: string,
  paginationTokens: object,
  pageIndex: number
) => {
  console.log('From setNextToken => ', {
    prevOrNext,
    paginationTokens,
    pageIndex,
  });
  return paginationTokens[pageIndex];
};

export const setPaginationTokens = (
  paginationTokens: object,
  nextToken: string
): object => {
  const tokensArray = Object.values(paginationTokens);
  const nextTokenExists = tokensArray.includes(nextToken);
  console.log('from setPaginationTokens => ', {
    paginationTokens,
    nextToken,
    nextTokenExists,
  });
  if (nextTokenExists) {
    return paginationTokens;
  } else {
    console.log('BEFORE OBJECT ASSIGN => ', paginationTokens);
    paginationTokens = Object.assign({}, paginationTokens);
    console.log('AFTER OBJECT ASSIGN => ', paginationTokens);

    paginationTokens[tokensArray.length + 1] = nextToken;
    console.log('new pagination tokens => ', paginationTokens);
    return paginationTokens;
  }
};

export const disablePaginationButtons = (
  paginationTokens: object,
  nextToken: string,
  pageIndex: number
): any => {
  console.log('from disablePaginationButtons => ', {
    paginationTokens,
    nextToken,
    pageIndex,
  });
  return {
    previousPageDisabled: pageIndex == 1 ? true : false,
    nextPageDisabled: nextToken == null ? true : false,
  };
};

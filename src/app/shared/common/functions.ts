import { MatSelectOption, PaginationObject } from './models';

export const getOptionLabel = (
  value: string,
  options: MatSelectOption[]
): string => {
  const option = options.find((o) => o.value === value);
  if (option) {
    return option.label;
  } else return undefined;
};

export const setNextToken = (paginationObject: PaginationObject): string => {
  const { paginationTokens, pageIndex } = paginationObject;
  return paginationTokens[pageIndex];
};

export const updatePaginationObject = (
  paginationObject: PaginationObject,
  nextToken: string
) => {
  // Update paginationTokens
  let {
    paginationTokens,
    pageIndex,
    previousPageDisabled,
    nextPageDisabled,
  } = paginationObject;
  const tokensArray = Object.values(paginationTokens);
  const nextTokenExists = tokensArray.includes(nextToken);
  let newPaginationTokens;
  if (nextTokenExists) {
    newPaginationTokens = paginationTokens;
  } else {
    paginationTokens = Object.assign({}, paginationTokens);
    paginationTokens[tokensArray.length + 1] = nextToken;
    newPaginationTokens = paginationTokens;
  }
  // Update show/hide of pagination buttons

  (previousPageDisabled = pageIndex == 1 ? true : false),
    (nextPageDisabled = nextToken == null ? true : false),
    (paginationObject = {
      ...paginationObject,
      paginationTokens: newPaginationTokens,
      previousPageDisabled,
      nextPageDisabled,
    });
  return paginationObject;
};

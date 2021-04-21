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
  previousToken: string,
  nextToken: string,
  nextNextToken: string
) => {
  console.log('from setNextToken => ', {
    prevOrNext,
    previousToken,
    nextToken,
    nextNextToken,
  });
  if (prevOrNext == NEXT_PAGE) {
    return nextNextToken;
  } else if (prevOrNext == PREVIOUS_PAGE) {
    return previousToken;
  } else {
    return nextToken;
  }
};

export const disablePaginationButtons = (
  previousToken: string,
  nextToken: string
) => {
  return {
    previousPageDisabled: previousToken == null ? true : false,
    nextPageDisabled: nextToken == null ? true : false,
  };
};

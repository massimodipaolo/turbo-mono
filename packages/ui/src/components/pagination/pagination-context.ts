import React from 'react';
import { tuple } from '../tooltip/tooltip-props';

const paginationUpdateTypes = tuple('prev', 'next', 'click');

export type PaginationUpdateType = typeof paginationUpdateTypes[number];

export type PaginationConfig = {
  isFirst?: boolean;
  isLast?: boolean;
  update?: (type: PaginationUpdateType) => void;
}

const defaultContext = {};

export const PaginationContext = React.createContext<PaginationConfig>(defaultContext);

export const usePaginationContext = (): PaginationConfig => React.useContext<PaginationConfig>(PaginationContext);

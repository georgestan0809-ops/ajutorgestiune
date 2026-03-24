export type ID = string;

export type ISODateTimeString = string;

export type PaginationInput = {
  page: number;
  pageSize: number;
};

export type PaginatedResult<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
};

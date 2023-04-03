export interface IFilters {
  price: number[];
  sort: boolean[];
  type: string[];
  manufacturers: { [key: string]: boolean };
}

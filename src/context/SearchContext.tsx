import { createContext } from "react";

export type SearchContextType = {
  search: string;
  setSearch: Function;
};

export const SearchContext = createContext<SearchContextType>();

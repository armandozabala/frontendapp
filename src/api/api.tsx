import axios from "axios";
const apiUrl = process.env.BASEURL_BACKEND;
const path = "items";

const http = axios.create({
  baseURL: apiUrl,
});

/**
 * getItems - get all items
 * @param query
 * @returns
 */
export const getItems: any = (query: string) => {
  return http.get(`${path}?q=${query}`);
};

/**
 * getItemDetails: get items with details
 * @param id
 * @returns
 */
export const getItemDetails: any = (id: string) => {
  return http.get(`${path}/${id}`);
};

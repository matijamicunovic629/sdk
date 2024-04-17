import { fetchWithValidation } from 'simple-typed-fetch';
import { tickersSchema } from './schemas';
import type { TickersBaseSearchParams, TickersCategories } from '../../types';

export class Frontage {
  private readonly apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;

    this.searchTickers = this.searchTickers.bind(this);
    this.getTickers = this.getTickers.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
  }

  searchTickers = ({
    searchValue,
    currentNetwork,
    targetNetwork,
    sortBy,
    sortType,
    offset,
    limit,
  }: { searchValue: string } & TickersBaseSearchParams) => {
    const queryParams = [
      `searchValue=${encodeURIComponent(searchValue)}`,
      currentNetwork !== undefined ? `&currentNetwork=${encodeURIComponent(currentNetwork).toUpperCase()}` : '',
      targetNetwork !== undefined ? `&targetNetwork=${encodeURIComponent(targetNetwork).toUpperCase()}` : '',
      sortBy !== undefined ? `&sortBy=${encodeURIComponent(sortBy)}` : '',
      sortType !== undefined ? `&sortType=${encodeURIComponent(sortType)}` : '',
      offset !== undefined ? `&offset=${offset}` : '',
      limit !== undefined ? `&limit=${limit}` : '',
    ].filter(Boolean).join('&');

    return fetchWithValidation(
      `${this.apiUrl}/api/v1/tickers/search?${queryParams}`,
      tickersSchema
    );
  };

  getTickers = ({
    category,
    currentNetwork,
    targetNetwork,
    sortBy,
    sortType,
    offset,
    limit,
  }: { category: TickersCategories } & TickersBaseSearchParams) => {
    const queryParams = [
      `category=${encodeURIComponent(category)}`,
      currentNetwork !== undefined ? `&currentNetwork=${encodeURIComponent(currentNetwork).toUpperCase()}` : '',
      targetNetwork !== undefined ? `&targetNetwork=${encodeURIComponent(targetNetwork).toUpperCase()}` : '',
      sortBy !== undefined ? `&sortBy=${encodeURIComponent(sortBy)}` : '',
      sortType !== undefined ? `&sortType=${encodeURIComponent(sortType)}` : '',
      offset !== undefined ? `&offset=${offset}` : '',
      limit !== undefined ? `&limit=${limit}` : '',
    ].filter(Boolean).join('&');

    return fetchWithValidation(
      `${this.apiUrl}/api/v1/tickers/get/category?${queryParams}`,
      tickersSchema
    );
  };

  getFavorites = ({
    tickers,
    currentNetwork,
    targetNetwork,
    sortBy,
    sortType,
    offset,
    limit,
  }: { tickers: string } & TickersBaseSearchParams) => {
    const queryParams = [
      `tickers=${encodeURIComponent(tickers)}`,
      currentNetwork !== undefined ? `&currentNetwork=${encodeURIComponent(currentNetwork).toUpperCase()}` : '',
      targetNetwork !== undefined ? `&targetNetwork=${encodeURIComponent(targetNetwork).toUpperCase()}` : '',
      sortBy !== undefined ? `&sortBy=${encodeURIComponent(sortBy)}` : '',
      sortType !== undefined ? `&sortType=${encodeURIComponent(sortType)}` : '',
      offset !== undefined ? `&offset=${offset}` : '',
      limit !== undefined ? `&limit=${limit}` : '',
    ].filter(Boolean).join('&');

    return fetchWithValidation(
      `${this.apiUrl}/api/v1/tickers/get/favourites?${queryParams}`,
      tickersSchema
    );
  };
}

export * as schemas from './schemas/index.js';

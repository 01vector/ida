/* eslint-disable */

export const priceFormatter = (value: string): string => {
  return value = value.includes('.')
    ? value.trim()
    : value.replace(' ', '.').trim();
};
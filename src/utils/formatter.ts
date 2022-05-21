/* eslint-disable */

export const priceFormatter = (value: string): string => {
  return value = value.includes('.')
    ? value.trim()
    : value.replace(' ', '.').trim();
};

export const linksFormatter = (value: string): string => {
  if (value.includes('http') || value.includes('../') || value.includes('./')) return value;
  else return '../../assets/Rectangle 30.png';
}
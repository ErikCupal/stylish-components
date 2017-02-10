import { media } from 'typestyle';
export const small = (...properties) => media({ minWidth: 500 }, ...properties);
export const medium = (...properties) => media({ minWidth: 900 }, ...properties);
export const large = (...properties) => media({ minWidth: 1200 }, ...properties);
export { small as sm, medium as md, large as lg, };

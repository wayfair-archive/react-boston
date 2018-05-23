import { css } from 'styled-components';

export const breakpoints = {
  xs: 450,
  sm: 640,
  md: 1024,
  lg: 1141,
  xl: 1400
};

export const theme2017 = {
  color: {
    white: '#fff',
    black: '#111',
    primary: '#f15959',
    primaryAccent: '#ed2a2a',
    secondary: '#4baee2',
    darkest: '#333',
    dark: '#666',
    light: '#ccc',
    lightest: '#eee'
  }
};

export const theme2018 = {
  color: {
    white: '#fff',
    black: '#111',
    primary: '#f15959',
    primaryAccent: '#ed2a2a',
    secondary: '#4baee2',
    darkest: '#333',
    dark: '#666',
    light: '#9b9b9b',
    lightest: '#f9f9f9'
  },
  containerWidth: '1200px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.08)',
  media: {
    ...Object.keys(breakpoints).reduce((acc, label) => {
      // `any` type below to allow whatever values that styled-components accepts in the css function
      acc[label] = (...args: any) => css`
        @media screen and (min-width: ${breakpoints[label]}px) {
          ${css(...args)};
        }
      `;
      return acc;
    }, {})
  }
};

export const hexToRGB = hex => {
  const matched = hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (r, g, b) => '#' + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g);
  if (matched) {
    return matched.map(x => parseInt(x, 16)).toString();
  }
};

export const hexToRGBA = (hex: string, alpha: number) => {
  const rgb = hexToRGB(hex);
  return `rgba(${rgb}, ${alpha})`;
};

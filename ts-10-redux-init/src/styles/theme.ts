import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  fg: 'palevioletred',
  bg: 'white',
};

export const invertTheme = ({ fg, bg }: DefaultTheme): DefaultTheme => ({
  fg: bg,
  bg: fg,
});

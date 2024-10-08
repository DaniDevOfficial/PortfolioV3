
  export type Colors = keyof typeof Tokens.colors
  export type FontSize = keyof typeof Tokens.fontSizes
  export type Shadows = keyof typeof Tokens.boxShadows

  export type Token = Colors | FontSize | Shadows

  export const Tokens = {
  colors: {
    text: {
      '50': '#895732',
      '100': '#6e4628',
      '200': '#54361f',
      '300': '#3a2515',
      '400': '#25180e',
      '500': '#0b0704',
      '600': '#000000',
      '700': '#000000',
      '800': '#000000',
      '900': '#000000',
      dark: '#fbf7f4',
      base: '#141414',
    },
    background: {
      '50': '#ffffff',
      '100': '#ffffff',
      '200': '#ffffff',
      '300': '#ffffff',
      '400': '#ffffff',
      '500': '#fcf7f3',
      '600': '#f5e4d6',
      '700': '#e8c2a3',
      '800': '#e1af86',
      '900': '#da9c6a',
      dark: '#150900',
      base: '#FFF3EB',
    },
    primary: {
      '50': '#f1d8c9',
      '100': '#e9c4ad',
      '200': '#e2b091',
      '300': '#da9c75',
      '400': '#d48b5e',
      '500': '#cd7742',
      '600': '#ba6531',
      '700': '#874a24',
      '800': '#6b3a1c',
      '900': '#4f2b15',
      base: '#cd7742',
      dark: '#bd6832',
    },
    secondary: {
      '50': '#ffffff',
      '100': '#fdfdf9',
      '200': '#f3f6dd',
      '300': '#e9eec1',
      '400': '#e1e8ab',
      '500': '#d7e08f',
      '600': '#cdd873',
      '700': '#bbca41',
      '800': '#a7b532',
      '900': '#8d992a',
      base: '#d7e08f',
      dark: '#67701f',
    },
    accent: {
      '50': '#f9fdf6',
      '100': '#e8f5da',
      '200': '#d8edbe',
      '300': '#c7e6a2',
      '400': '#b9e08b',
      '500': '#a8d86f',
      '600': '#97d053',
      '700': '#77b330',
      '800': '#649729',
      '900': '#527a21',
      base: '#a8d86f',
      dark: '#619027',
    },
  },
  fontSizes: {},
  fontWeights: {},
  lineHeights: {},
  boxShadows: {},
}
  
import { createGlobalStyle } from "styled-components";
import OpenSauceOneRegular from '../fonts/OpenSauceOne-Regular.ttf'
import OpenSauceOneBold from '../fonts/OpenSauceOne-Bold.ttf'
import OpenSauceOneSemiBold from '../fonts/OpenSauceOne-SemiBold.ttf'
import OpenSauceOneItalic from '../fonts/OpenSauceOne-Italic.ttf'


export const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Open Sauce One';
  src: url(${OpenSauceOneRegular}) format('ttf');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Open Sauce One';
  src: url(${OpenSauceOneBold}) format('ttf');
  font-weight: 700;
  font-style: bold;
}

@font-face {
  font-family: 'Open Sauce One';
  src: url(${OpenSauceOneSemiBold}) format('ttf');
  font-weight: 600;
}

@font-face {
  font-family: 'Open Sauce One';
  src: url(${OpenSauceOneItalic}) format('ttf');
  font-weight: 400;
  font-style: italic;
}

`;

export default FontStyles;
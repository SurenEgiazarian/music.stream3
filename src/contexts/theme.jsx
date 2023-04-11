import React, { useContext } from "react";
import { css } from 'styled-components';

export const themes = {
  light: css`
    --lightGray: #F5F5F5;
    --blackOpacity85: transparent;
    --mainColor: #000000;
    --formColor: #FFFFFF;
    --background1: #FFFFFF;
    --background2: #F6F5F3;
    --background3: #383838;
    --background4: #F5F5F5;
    --grey: #D0CECE;
    --primeButtonRegular: #580EA2;
    --primeButtonHover: #3F007D;
    --primeButtonActive: #271A58;
    --simpleButtonRegular: #FFFFFF;
    --simpleButtonHover: #F4F5F6;
    --simpleButtonActive: #D9D9D9;
    --filterButtonRegular: #000000;
    --filterButtonHover: #580EA2;
    --filterButtonActive: #AD61FF;
    --CtrlBtnReg1: #B1B1B1;
    --CtrlBtnReg2: transparent;
    --CtrlBtnReg3: #B1B1B1;
    --CtrlBtnHvr1: #707070;
    --CtrlBtnHvr2: transparent;
    --CtrlBtnHvr3: #707070;
    --CtrlBtnAct1: #000000;
    --CtrlBtnAct2: #AD61FF;
    --CtrlBtnAct3: #B1B1B1;
    --placeholder: #E1E1E1;
    --skeleton: #F6F4F4;
    --additionalText: #B1B1B1;
    --line: #D9D9D9;
    --progressLine: #6256A5;
  `,
  dark: css`
    --lightGray: #F5F5F5;
    --blackOpacity85: #000000DA;
    --mainColor: #FFFFFF;
    --formColor: #FFFFFF;
    --background1: #181818;
    --background2: #1C1C1C;
    --background3: #383838;
    --background4: #F5F5F5;
    --grey: #D0CECE;
    --primeButtonRegular: #580EA2;
    --primeButtonHover: #3F007D;
    --primeButtonActive: #271A58;
    --simpleButtonRegular: #FFFFFF;
    --simpleButtonHover: #F4F5F6;
    --simpleButtonActive: #D9D9D9;
    --filterButtonRegular: #FFFFFF;
    --filterButtonHover: #D9B6FF;
    --filterButtonActive: #AD61FF;
    --CtrlBtnReg1: #696969;
    --CtrlBtnReg2: transparent;
    --CtrlBtnReg3: #D9D9D9;
    --CtrlBtnHvr1: #ACACAC;
    --CtrlBtnHvr2: transparent;
    --CtrlBtnHvr3: #696969;
    --CtrlBtnAct1: #FFFFFF;
    --CtrlBtnAct2: #696969;
    --CtrlBtnAct3: #D9D9D9;
    --placeholder: #E1E1E1;
    --skeleton: #313131;
    --additionalText: #4E4E4E;
    --line: #2E2E2E;
    --progressLine: #6256A5;
  `
};


export const ThemeContext = React.createContext({
  themeName: 'dark',
  toggleTheme: () => {},
});


export const useThemeContext = () => {
  const theme = useContext(ThemeContext);

  if(!theme) return themes.dark;

  return theme;
}
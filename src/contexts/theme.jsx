import React, { useContext } from 'react';
import { css } from 'styled-components';

export const themes = {
    light: css`
        --lightGray: #f5f5f5;
        --blackOpacity85: transparent;
        --mainColor: #000000;
        --formColor: #ffffff;
        --background1: #ffffff;
        --background2: #f6f5f3;
        --background3: #383838;
        --background4: #f5f5f5;
        --grey: #d0cece;
        --primeButtonRegular: #580ea2;
        --primeButtonHover: #3f007d;
        --primeButtonActive: #271a58;
        --simpleButtonRegular: #ffffff;
        --simpleButtonHover: #f4f5f6;
        --simpleButtonActive: #d9d9d9;
        --filterButtonRegular: #000000;
        --filterButtonHover: #580ea2;
        --filterButtonActive: #ad61ff;
        --CtrlBtnReg1: #b1b1b1;
        --CtrlBtnReg2: transparent;
        --CtrlBtnReg3: #b1b1b1;
        --CtrlBtnHvr1: #707070;
        --CtrlBtnHvr2: transparent;
        --CtrlBtnHvr3: #707070;
        --CtrlBtnAct1: #000000;
        --CtrlBtnAct2: #ad61ff;
        --CtrlBtnAct3: #b1b1b1;
        --placeholder: #e1e1e1;
        --skeleton: #f6f4f4;
        --additionalText: #b1b1b1;
        --line: #d9d9d9;
        --progressLine: #6256a5;
    `,
    dark: css`
        --lightGray: #f5f5f5;
        --blackOpacity85: #000000da;
        --mainColor: #ffffff;
        --formColor: #ffffff;
        --background1: #181818;
        --background2: #1c1c1c;
        --background3: #383838;
        --background4: #f5f5f5;
        --grey: #d0cece;
        --primeButtonRegular: #580ea2;
        --primeButtonHover: #3f007d;
        --primeButtonActive: #271a58;
        --simpleButtonRegular: #ffffff;
        --simpleButtonHover: #f4f5f6;
        --simpleButtonActive: #d9d9d9;
        --filterButtonRegular: #ffffff;
        --filterButtonHover: #d9b6ff;
        --filterButtonActive: #ad61ff;
        --CtrlBtnReg1: #696969;
        --CtrlBtnReg2: transparent;
        --CtrlBtnReg3: #d9d9d9;
        --CtrlBtnHvr1: #acacac;
        --CtrlBtnHvr2: transparent;
        --CtrlBtnHvr3: #696969;
        --CtrlBtnAct1: #ffffff;
        --CtrlBtnAct2: #696969;
        --CtrlBtnAct3: #d9d9d9;
        --placeholder: #e1e1e1;
        --skeleton: #313131;
        --additionalText: #4e4e4e;
        --line: #2e2e2e;
        --progressLine: #6256a5;
    `,
};

export const ThemeContext = React.createContext({
    themeName: 'dark',
    toggleTheme: () => {},
});

export const useThemeContext = () => {
    const theme = useContext(ThemeContext);

    if (!theme) return themes.dark;

    return theme;
};

import styled, { css } from 'styled-components';
import * as COLORS from '../../colors';
import { Container } from '../main/styles';

export const FullHight = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    background-color: ${COLORS.formColor};
    width: 366px;
    height: 439px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 18px;
    line-height: 24px;
`;

export const LogoImage = styled.img`
  width: 140px;
  height: 21 px;
`;

export const Input = styled.input`
    width: 278px;
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: inherit;
    color: ${COLORS.grey};
    padding-bottom: 8px;
    border: none;
    border-bottom: 2px solid ${COLORS.grey};
    &::placeholder {
        color: ${COLORS.grey};
    }
`;

const buttonMixin = css`
    width: 278px;
    height: 52px;
    border: 1px solid ${COLORS.grey};
    border-radius: 6px;
    font-size: inherit;
`;

export const PrimeButton = styled.button`
    ${buttonMixin}
    border: none;
    color: ${COLORS.mainColor};
    background-color: ${COLORS.primeButtonRegular};
    &:hover {
        background-color: ${COLORS.primeButtonHover};
    }
    &:active {
        background-color: ${COLORS.primeButtonActive};
    }
`;

export const SimpleButton = styled.button`
    ${buttonMixin}
    background-color: ${COLORS.simpleButtonRegular};
    &:hover {
        background-color: ${COLORS.simpleButtonHover};
    }
    &:active {
        background-color: ${COLORS.simpleButtonActive};
    }
`;

export default Container;
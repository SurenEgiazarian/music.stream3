import styled, { css } from 'styled-components';
import { Container } from '../main/styles';

export const FullHight = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    background-color: var(--formColor);
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
    color: var(--grey);
    padding-bottom: 8px;
    border: none;
    border-bottom: 2px solid var(--grey);
    &::placeholder {
        color: var(--grey);
    }
`;

const buttonMixin = css`
    width: 278px;
    height: 52px;
    border: 1px solid var(--grey);
    border-radius: 6px;
    font-size: inherit;
`;

export const PrimeButton = styled.button`
    ${buttonMixin}
    border: none;
    color: var(--mainColor);
    background-color: var(--primeButtonRegular);
    &:hover {
        background-color: var(--primeButtonHover);
    }
    &:active {
        background-color: var(--primeButtonActive);
    }
`;

export const SimpleButton = styled.button`
    ${buttonMixin}
    background-color: var(--simpleButtonRegular);
    &:hover {
        background-color: var(--simpleButtonHover);
    }
    &:active {
        background-color: var(--simpleButtonActive);
    }
`;

export const Loading = styled.p`
    color: black;
`;

export const Error = styled.p`
    color: red;
    font-size: 12px;
`;

export default Container;

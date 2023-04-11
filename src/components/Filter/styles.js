import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const buttonTextActiveMixin = css`
  border-color: var(--filterButtonActive);
  color: var(--filterButtonActive);
  cursor: pointer;
`;

export const Button = styled.button`
  & {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid var(--filterButtonRegular);
    border-radius: 60px;
    padding: 6px 20px;
    color: inherit;
    background-color: inherit;
    ${(props) => (props.$isActive ? buttonTextActiveMixin : ``)}
  }

  &:hover {
    border-color: var(--filterButtonHover);
    color: var(--filterButtonHover);
    cursor: pointer;
  }

  &:active {
    ${buttonTextActiveMixin}
  }
`;

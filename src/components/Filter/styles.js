import styled, { css } from 'styled-components';
import * as COLORS from '../../colors';

export const Wrapper = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const buttonTextActiveMixin = css`
  border-color: ${COLORS.filterButtonActive};
  color: ${COLORS.filterButtonActive};
  cursor: pointer;
`;

export const Button = styled.button`
  & {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid ${COLORS.filterButtonRegular};
    border-radius: 60px;
    padding: 6px 20px;
    color: inherit;
    background-color: inherit;
    ${(props) => (props.$isActive ? buttonTextActiveMixin : ``)}
  }

  &:hover {
    border-color: ${COLORS.filterButtonHover};
    color: ${COLORS.filterButtonHover};
    cursor: pointer;
  }

  &:active {
    ${buttonTextActiveMixin}
  }
`;

import styled, { css } from 'styled-components';
import { cursorPointer } from '../../styles';
import * as COLORS from '../../colors';

const getBtnStyle = (btnName) => {
  const btnStyles = {
    prev: css`
      margin-right: 23px;
    `,
    play: css`
      margin-right: 23px;
    `,
    next: css`
      margin-right: 28px;
      fill: #a53939;
    `,
    repeat: css`
      margin-right: 24px;
    `,
    shuffle: css`
      display: flex;
      align-items: center;
    `,
  };
  return btnStyles[btnName];
};

const getBtnSvgStyle = (btnName) => {
  const btnSvgStyles = {
    prev: css`
      width: 15px;
      height: 14px;
    `,
    play: css`
      width: 22px;
      height: 20px;
      fill: ${COLORS.controlButton};
    `,
    next: css`
      width: 15px;
      height: 14px;
      fill: inherit;
      stroke: ${COLORS.controlButton};
    `,
    repeat: css`
      width: 18px;
      height: 12px;
      fill: transparent;
      stroke: ${COLORS.controlButtonRegular};
    `,
    shuffle: css`
      width: 19px;
      height: 12px;
      fill: transparent;
      stroke: ${COLORS.controlButtonRegular};
    `,
  };
  return btnSvgStyles[btnName];
};

export const PlayerBtn = styled.button`
  background: none;
  border: none;
  padding: 5px;
  display: flex;
  align-items: center;
  fill: ${COLORS.controlButton};
  stroke: ${COLORS.controlButtonActive};
  ${({ $btnName }) => getBtnStyle($btnName)}
  ${({ $cursor }) => $cursor && cursorPointer}
    ${({ $hoverIcon }) =>
    $hoverIcon &&
    `
        &:hover svg{
            fill: transparent;
            stroke: ${COLORS.controlButtonHover};
            cursor: pointer;
        }
        &:active svg {
            fill: transparent;
            stroke: ${COLORS.controlButtonActive};
            cursor: pointer;
        }
    `}
`;

export const PlayerBtnSvg = styled.svg`
  ${({ $btnName }) => getBtnSvgStyle($btnName)}
`;

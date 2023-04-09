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
    play: css`
      fill: ${COLORS.controlButtonRegular};
    `,
    next: css`
      fill: inherit;
      stroke: ${COLORS.controlButtonRegular};
    `,
    repeat: css`
      fill: transparent;
      stroke: ${COLORS.controlButtonRegular};
    `,
    shuffle: css`
      fill: transparent;
      stroke: ${COLORS.controlButtonRegular};
    `,
  };
  return btnSvgStyles[btnName];
};

export const PlayerBtn = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  fill: ${COLORS.simpleButtonActive};
  stroke: ${COLORS.controlButtonRegular};
  width: ${({ width }) => width};
  width: ${({ height }) => height};
  ${({ $btnName }) => getBtnStyle($btnName)}
  ${({ $cursor }) => $cursor && cursorPointer}
    ${({ $hoverIcon }) =>
    $hoverIcon &&
    `
        &:hover svg {
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

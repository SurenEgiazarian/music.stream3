import styled, { css } from 'styled-components';
import { cursorPointer } from '../../styles';

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
      fill: var(--controlButtonRegular);
    `,
    next: css`
      fill: inherit;
      stroke: var(--controlButtonRegular);
    `,
    repeat: css`
      fill: transparent;
      stroke: var(--controlButtonRegular);
    `,
    shuffle: css`
      fill: transparent;
      stroke: var(--controlButtonRegular);
    `,
  };
  return btnSvgStyles[btnName];
};

export const PlayerBtn = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  fill: var(--simpleButtonActive);
  stroke: var(--controlButtonRegular);
  width: ${({ width }) => width};
  width: ${({ height }) => height};
  ${({ $btnName }) => getBtnStyle($btnName)}
  ${({ $cursor }) => $cursor && cursorPointer}
    ${({ $hoverIcon }) =>
    $hoverIcon &&
    `
        &:hover svg {
            fill: transparent;
            stroke: var(--controlButtonHover);
            cursor: pointer;
        }
        &:active svg {
            fill: transparent;
            stroke: var(--controlButtonActive);
            cursor: pointer;
        }
    `}
`;

export const PlayerBtnSvg = styled.svg`
  ${({ $btnName }) => getBtnSvgStyle($btnName)}
`;

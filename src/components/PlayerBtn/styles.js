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
    pause: css`
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

const getBtnSvgRegular = (btnName) => {
  const btnSvgStyles = {
    prev: css`
      fill: var(--CtrlBtnReg3);
    `,
    play: css`
      fill: var(--CtrlBtnReg3);
    `,
    pause: css`
      fill: var(--CtrlBtnReg3);
    `,
    next: css`
      fill: var(--CtrlBtnReg3);
    `,
    repeat: css`
      stroke: var(--CtrlBtnReg1);
    `,
    shuffle: css`
      stroke: var(--CtrlBtnReg1);
    `,
  };
  return btnSvgStyles[btnName];
};

const getBtnSvgHover = (btnName) => {
  const btnSvgStyles = {
    prev: css`
      fill: var(--CtrlBtnHvr3);
    `,
    play: css`
      fill: var(--CtrlBtnHvr3);
    `,
    pause: css`
      fill: var(--CtrlBtnHvr3);
    `,
    next: css`
      fill: var(--CtrlBtnHvr3);
    `,
    repeat: css`
      stroke: var(--CtrlBtnHvr1);
    `,
    shuffle: css`
      stroke: var(--CtrlBtnHvr1);
    `,
  };
  return btnSvgStyles[btnName];
};

const getBtnSvgActive = (btnName) => {
  const btnSvgStyles = {
    prev: css`
      fill: var(--CtrlBtnAct3);
    `,
    play: css`
      fill: var(--CtrlBtnAct3);
    `,
    pause: css`
      fill: var(--CtrlBtnAct3);
    `,
    next: css`
      fill: var(--CtrlBtnAct3);
    `,
    repeat: css`
      stroke: var(--CtrlBtnAct1);
    `,
    shuffle: css`
      stroke: var(--CtrlBtnAct1);
    `,
  };
  return btnSvgStyles[btnName];
};

export const PlayerBtnSvg = styled.svg`
  ${({ $btnName }) => getBtnSvgRegular($btnName)}
  width: ${p => p.$width};
  height: ${p => p.$height};
`;

export const PlayerBtn = styled.button`
  background: none;
  border: none;
  padding: 5px;
  display: flex;
  align-items: center;
  ${({ $btnName }) => getBtnStyle($btnName)}
  ${({ $cursor }) => $cursor && cursorPointer}
  &:hover svg{
    ${({ $btnName }) => getBtnSvgHover($btnName)}
    cursor: pointer;
  }
  &:active svg {
    ${({ $btnName }) => getBtnSvgActive($btnName)}
    cursor: pointer;
  }
`;

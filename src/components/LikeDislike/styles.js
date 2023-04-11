import styled, { css } from 'styled-components';

export const LikeDislike = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26px;
`;

const active = css`
  &:active svg {
    fill: var(--CtrlBtnAct2);
    stroke: var(--CtrlBtnAct1);
    cursor: pointer;
  }
`;

const hover = css`
  &:hover svg {
    fill: var(--CtrlBtnHvr2);
    stroke: var(--CtrlBtnHvr1);
    cursor: pointer;
  }
`;

export const Like = styled.div`
  padding: 5px;
  ${hover}
  ${active}
`;

export const Dislike = styled.div`
  padding: 5px;
  margin-left: 29px;
  ${hover}
  ${active}
`;

export const LikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: var(--CtrlBtnReg2);
  stroke: var(--CtrlBtnReg1);
`;

export const DislikeSvg = styled.svg`
  width: 15px;
  height: 13px;
  fill: var(--CtrlBtnReg2);
  stroke: var(--CtrlBtnReg1);
`;

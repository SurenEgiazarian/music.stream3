import styled, { css } from 'styled-components';
import * as COLORS from '../../colors';

export const LikeDislike = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26px;
`;

const active = css`
  &:active svg {
    fill: ${COLORS.controlButtonRegular};
    stroke: ${COLORS.controlButtonActive};
    cursor: pointer;
  }
`;

const hover = css`
  &:hover svg {
    fill: transparent;
    stroke: ${COLORS.controlButtonHover};
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
  fill: transparent;
  stroke: ${COLORS.controlButtonRegular};
`;

export const DislikeSvg = styled.svg`
  width: 15px;
  height: 13px;
  fill: transparent;
  stroke: ${COLORS.controlButtonRegular};
`;

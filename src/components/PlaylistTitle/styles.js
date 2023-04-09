import styled from 'styled-components';
import { colsWidth } from '../../constants';
import * as COLORS from '../../colors';

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const PlaylistTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: ${COLORS.controlButtonRegular};
  text-transform: uppercase;
  width: ${(props) => colsWidth[Number(props.$col) - 1].width};
  &:last-of-type {
    text-align: end;
  }
`;

export const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: ${COLORS.controlButtonRegular};
`;

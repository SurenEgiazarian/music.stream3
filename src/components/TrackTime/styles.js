import styled from 'styled-components';
import * as COLORS from '../../colors';

export const Svg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: ${COLORS.controlButtonRegular};
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: ${COLORS.controlButtonRegular};
`;

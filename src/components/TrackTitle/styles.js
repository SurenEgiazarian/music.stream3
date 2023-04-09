import styled from 'styled-components';
import * as S from '../PlaylistItem/styles';
import * as COLORS from '../../colors';

export const Svg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: ${COLORS.additionalText};
`;

export const Link = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.mainColor};
`;

export const Span = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.additionalText};
`;

export const { Title } = S;
export const { TitleImage } = S;

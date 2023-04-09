import styled from 'styled-components';
import * as S from '../PlaylistItem/styles';
import * as COLORS from '../../colors';

export const AlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.controlButtonRegular};
`;

export const { Album } = S;

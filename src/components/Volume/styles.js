import styled from 'styled-components';
import { cursorPointer } from '../../styles';

export const Bar = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
`;

export const Image = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`;

export const Svg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`;

export const Progress = styled.div`
  width: 109px;
  ${cursorPointer}
`;

export const ProgressLine = styled.input`
  width: 109px;
  ${cursorPointer}
`;

import styled, { css } from 'styled-components';
import * as COLORS from './colors';

export const cursorPointer = css`
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: ${COLORS.background4};
`;

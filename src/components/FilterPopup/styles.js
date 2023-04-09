import styled from 'styled-components';
import * as COLORS from '../../colors';

export const Text = styled.div`
  & {
    font-family: 'StratosSkyeng';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    cursor: pointer;
  }
  &:hover {
    text-decoration-line: underline;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #b672ff;
  }
`;

export const Popup = styled.div`
  position: absolute;
  top: 50px;
  width: 424px;
  background: ${COLORS.skeleton};
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 34px;
  align-items: center;
  padding: 34px;
`;

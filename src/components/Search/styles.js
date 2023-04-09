import styled from 'styled-components';
import * as COLORS from '../../colors';

export const CenterBlockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid ${COLORS.additionalText};
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchSvg = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: ${COLORS.mainColor};
  fill: transparent;
`;

export const Input = styled.input`
  & {
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${COLORS.mainColor};
  }

  &::placeholder {
    background-color: transparent;
    color: ${COLORS.mainColor};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

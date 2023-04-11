import styled from 'styled-components';

export const CenterBlockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--additionalText);
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchSvg = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: var(--mainColor);
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
    color: var(--mainColor);
  }

  &::placeholder {
    background-color: transparent;
    color: var(--mainColor);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

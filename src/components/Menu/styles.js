import styled from 'styled-components';
import { Link } from "react-router-dom";
import * as COLORS from '../../colors';

export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`;

export const MenuLink = styled(Link)`
  color: ${COLORS.mainColor};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-family: 'StratosSkyeng';
`;

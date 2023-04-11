import styled from 'styled-components';
import * as S from '../PlaylistItem/styles';

export const Svg = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: var(--additionalText);
`;

export const Link = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--mainColor);
`;

export const Span = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--additionalText);
`;

export const { Title } = S;
export const { TitleImage } = S;

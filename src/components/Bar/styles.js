import styled from 'styled-components';

export const Content = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: inherit;
    display: flex;
    flex-direction: column;
    background: var(--background1);
`;

export const PlayerProgressWrap = styled.div`
    width: 100%;
    height: 5px;
    background: var(--line);
`;

export const PlayerProgress = styled.div`
    width: ${(props) => props.width}%;
    height: 100%;
    background: var(--progressLine);
`;

export const Audio = styled.audio`
    display: none;
`;

export const PlayerBlock = styled.div`
    height: 73px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Player = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

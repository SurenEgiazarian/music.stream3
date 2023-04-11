import styled from 'styled-components';

export const Track = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 447px;
`;

export const TitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: var(--skeleton);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;
`;

export const TitleSkeleton = styled.svg`
  width: 356px;
  height: 19px;
  background-color: var(--skeleton);
`;

export const Author = styled.div`
  width: 321px;
  ${(props) =>
    props.$isLoading
      ? `height: 19px;
        background-color: var(--skeleton);`
      : `display: flex;
        justify-content: flex-start;`}
`;

export const Album = styled.div`
  width: 245px;
  ${(props) =>
    props.$isLoading &&
    `height: 19px;
        background-color: var(--skeleton);`}
`;

export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;

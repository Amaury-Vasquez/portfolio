import styled from "styled-components";

export const Table = styled.div`
  width: 100%;
  height: 85vh;
  max-height: 85vh;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 2vw;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background: inherit;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    margin-top: 5vh;
  }
`;

export const TextBox = styled.div`
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  & > h3 {
    color: var(--gray-text);
    font-size: 25px;
  }
  @media screen and (max-width: 500px) {
    grid-column-end: 2;
    margin-top: 2vh;
  }
`;

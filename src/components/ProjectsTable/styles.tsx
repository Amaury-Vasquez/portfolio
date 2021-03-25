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
`;

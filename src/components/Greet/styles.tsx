import styled from "styled-components";

export const Welcome = styled.div`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;
`;

export const Info = styled.article`
  width: 100%;
  height: auto;
  line-height: 5vh;
  color: var(--gray-text);
  font-size: 20px;
  & > h2 {
    text-align: center;
    font-size: 2em;
  }
  & > h3 {
    font-size: 1.5em;
  }
  p {
    text-align: left;
    & > svg {
      margin-left: 1vw;
      font-size: 1.2em;
    }
  }
`;

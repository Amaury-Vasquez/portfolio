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

  @media screen and (max-width: 500px) {
    display: block;
    height: auto;
  }
`;

export const Info = styled.article`
  width: 100%;
  height: auto;
  line-height: 5vh;
  color: var(--gray-text);
  font-size: 16px;
  & > h2 {
    text-align: center;
    font-size: 2.5em;
  }
  & > h3 {
    font-size: 2em;
  }
  p {
    text-align: left;
    font-size: 1.3em;
    & > svg {
      margin-left: 1vw;
      font-size: 1.3em;
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
    margin-top: 2vh;
  }
`;

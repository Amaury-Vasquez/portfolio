import styled from "styled-components";

export const Div = styled.div`
  position: relative;
  top: 20%;
  font-size: 1rem;
  & > div {
    margin-top: 2vh;
  }
  @media screen and (max-width: 500px) {
    position: static;
    font-size: 12px;
    height: 100%;
    & > div {
      position: relative;
      top: 10%;
    }
  }
`;

export const Introduction = styled.article`
  text-align: center;
  color: var(--gray-text);
  height: auto;
  width: 100%;
  padding: 20px;
  line-height: 2.5em;
  & > h2 {
    font-size: 1.5em;
    margin-bottom: 1em;
  }
  & > h3 {
    font-size: 1.4em;
  }
  & > p,
  h4 {
    font-size: 1.2em;
  }

  @media screen and (max-width: 500px) {
    padding: 10px;
    position: relative;
    top: 10%;
  }
`;

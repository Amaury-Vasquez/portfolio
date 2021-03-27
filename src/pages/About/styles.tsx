import styled from "styled-components";

export const AboutInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Article = styled.article<{ quote?: boolean }>`
  color: var(--gray-text);
  font-size: 18px;
  line-height: 2em;
  padding: 1.5em;
  & > h3 {
    font-size: 1.3em;
    margin-bottom: 1vh;
    margin-top: 1vh;
  }
  & > p {
    font-size: 1em;
  }
  ${(props) =>
    props.quote ? "text-align: center; & > p {font-style: italic}" : ""};
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

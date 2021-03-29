import styled from "styled-components";

export const Content = styled.div`
  max-height: 92vh;
  height: 92vh;
  box-sizing: border-box;
  width: var(--content-width);
  background-color: var(--white);
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 10px;
    border: none;
  }
`;

export const Page = styled.div`
  width: 100vw;
  height: 92vh;
  max-height: 92vh;
  box-sizing: border-box;
`;

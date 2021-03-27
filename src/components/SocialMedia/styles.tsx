import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 30vw;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  & > a > svg {
    font-size: 2rem;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

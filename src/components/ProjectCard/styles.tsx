import styled from "styled-components";

import { fadeIn } from "../../styles/animation";

export const Card = styled.div`
  height: 25vh;
  width: 100%;
  border: 1px solid var(--gray);
  border-style: dashed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  &:hover {
    & > div:first-child {
      display: block;
    }
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  align-items: center;
  box-sizing: border-box;
`;

export const Image = styled.img`
  ${fadeIn()};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
`;

export const Info = styled.div`
  display: none;
  position: absolute;
  width: 22vw;
  height: 25vh;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  text-align: center;
  color: var(--white);

  & > h3 {
    position: relative;
    top: 40%;
    color: var(--white);
    text-transform: capitalize;
  }
`;

export const Link = styled.div`
  margin: 0 auto;
  position: relative;
  top: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 5vh;
  background-color: var(--red);
  border-radius: 5px;
  & > a {
    text-transform: capitalize;
    color: var(--white);
    font-weight: 500;
  }
`;

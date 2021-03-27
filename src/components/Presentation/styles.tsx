import styled from "styled-components";
import { fadeIn } from "../../styles/animation";

export const PresentationCard = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Picture = styled.figure`
  width: 18vw;
  height: 18vw;
  padding: 10px;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: auto;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  ${fadeIn()};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  @media screen and (max-width: 500px) {
    width: 60%;
    height: 60%;
  }
`;

export const Name = styled.figcaption`
  color: var(--gray-text);
  font-weight: 600;
  font-size: 1.5rem;
  text-transform: capitalize;
  text-align: center;
  margin-top: 2vh;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
    margin-top: 10vh;
  }
`;

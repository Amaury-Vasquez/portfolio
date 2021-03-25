import styled from "styled-components";

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
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const Name = styled.figcaption`
  color: var(--gray-text);
  font-weight: 600;
  font-size: 18px;
  text-transform: capitalize;
  text-align: center;
  margin-top: 2vh;
`;

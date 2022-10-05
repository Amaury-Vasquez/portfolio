import styled from 'styled-components';

import { DeviceSize } from '../../DeviceSize';
import { fadeIn, typeWriter } from '../../styles/animation';

const { smallMobile, laptop, laptopL, desktop } = DeviceSize;

export const AboutPage = styled.div`
  ${fadeIn({ time: '1s' })};
  margin: 0 auto;
  padding: 30px;

  @media screen and (min-width: ${laptopL}) {
    width: min(100%, 1500px);
  }
`;

export const Intro = styled.article`
  font-size: 1rem;
  text-align: center;
  line-height: 4rem;
`;

export const WhoIam = styled.p`
  color: var(--orange);
  font-size: 2.5em;
  font-weight: 700;
`;

export const Description = styled.p`
  margin: 0 auto;
  color: white;
  font-size: 2em;
  font-weight: 600;
`;

export const Info = styled.div`
  background: #151515;
  margin-top: 30px;
  border-radius: 3px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: auto;
  padding: 30px;
  grid-gap: 30px;

  & > * {
    padding: 0 30px;
  }
`;

export const InfoList = styled.article`
  width: 100%;
  color: white;
  font-size: 1rem;
  line-height: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  & > p:first-child {
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 1.5em;
    grid-column-start: 1;
    grid-column-end: 3;
    font-weight: 600;
    font-style: italic;
  }
`;

export const ListItem = styled.p<{ color: string; n: number }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.n % 2 === 0 ? 'flex-start' : 'flex-end'};
  font-size: 1.2em;

  & > svg {
    margin-right: 10px;
    fill: ${(props) => props.color};
  }
`;

export const InfoText = styled.article`
  color: white;
  font-size: 1.2rem;
  line-height: 2rem;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: 3;
  text-align: justify;
`;

export const ButtonWrapper = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 200px;
  height: auto;
`;

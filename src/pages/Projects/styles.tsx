import styled from 'styled-components';
import { DeviceSize } from '../../DeviceSize';

const { smallMobile, laptop, laptopL, desktop } = DeviceSize;

export const ProjectPage = styled.div`
  width: 100vw;
  height: auto;
  font-size: 1rem;
`;

export const Layout = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  place-items: center;
  padding: 30px;
  grid-gap: 50px;

  @media screen and (min-width: ${laptopL}) {
    width: min(100%, 1500px);
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: ${laptopL}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

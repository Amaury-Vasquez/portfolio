import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import { fadeIn, typeWriter } from '../../styles/animation';

export const HomePage = styled.div`
  padding: 50px 40px;
  width: 100vw;
  height: auto;
`;

export const Introduction = styled.article`
  width: 100%;
  padding: 50px 30px 0;
  color: white;
  font-size: 1rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-style: italic;
`;

export const What = styled.p<{ len: number; time: number }>`
  font-size: 2em;
  ${(props) => typeWriter({ len: props.len.toString(), time: props.time })};
  & > svg {
    color: var(--blue);
  }
`;

export const Where = styled.p<{ len: number; time: number }>`
  margin-bottom: 60px;
  font-size: 1.5em;
  ${(props) => typeWriter({ len: props.len.toString(), time: props.time })};
  & > svg {
    color: var(--orange);
  }
`;

export const Who = styled.p<{ len: number; time: number }>`
  margin-bottom: 60px;
  font-size: 1.5em;
  ${(props) => typeWriter({ len: props.len.toString(), time: props.time })};
  & > svg {
    color: #ffea11;
  }
`;

export const Container = styled.div`
  ${fadeIn()};
  height: auto;
  padding: 50px 0 0;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  ${fadeIn()};
  border-radius: 50%;
  width: 250px;
  height: auto;
`;

export const Tour = styled(Link)`
  margin-top: 30px;
  ${fadeIn()};
  background: var(--soft-orange);
  height: auto;
  width: auto;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 50px;
  font-size: 1em;
  font-weight: 600;
  font-style: normal;

  & > svg {
    margin-left: 5px;
    color: white;
  }

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    opacity: 0.6;
  }
`;

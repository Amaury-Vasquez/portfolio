import styled from 'styled-components';
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

export const ButtonWrapper = styled.div`
  margin-top: 30px;
  height: auto;
  width: auto;
`;

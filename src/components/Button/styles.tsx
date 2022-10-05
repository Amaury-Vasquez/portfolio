import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { fadeIn } from '../../styles/animation';

export const TourButton = styled(Link)<{ color?: string }>`
  ${fadeIn()};
  background: ${(props) => (props.color ? props.color : 'var(--soft-orange)')};
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
    opacity: 0.5;
    border: 2px solid var(--green);
  }
`;

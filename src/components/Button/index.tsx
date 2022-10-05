import { IoMdArrowRoundForward } from 'react-icons/io';

import { TourButton } from './styles';

export const Button = (props: {
  color?: string;
  link: string;
  text: string;
}) => {
  const { color, link, text } = props;

  return (
    <TourButton color={color} to={link}>
      {text} <IoMdArrowRoundForward />
    </TourButton>
  );
};

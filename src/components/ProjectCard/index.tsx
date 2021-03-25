import { AiOutlineArrowRight } from "react-icons/ai";

import { Card, Container, Image, Info, Link } from "./styles";

export const ProjectCard = (props: {
  imgUrl: string;
  link: string;
  name: string;
}) => {
  const { imgUrl, link, name } = props;
  const ProjectImage = <Image src={imgUrl} alt={name} />;
  return (
    <Card>
      <Info>
        <h3> {name} </h3>
        <Link>
          <a href={link} rel="noopener noreferrer" target="_blank">
            {"view project"} <AiOutlineArrowRight />
          </a>
        </Link>
      </Info>
      <Container>{ProjectImage}</Container>
    </Card>
  );
};

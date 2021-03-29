import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

import { Container } from "./styles";

export const SocialMedia = () => {
  const socialMediaItems = [
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/amaury.vasquezenriquez",
      color: "#4267B2",
    },
    {
      icon: FaGithub,
      link: "https://github.com/Amaury-Vasquez/",
      color: "#333",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/vasquezamaury/",
      color: "#DD2A7B ",
    },
    {
      icon: FaTwitter,
      link: "https://twitter.com/AmauryVasquez11",
      color: "#00acee",
    },
  ];
  return (
    <Container>
      {socialMediaItems.map((item, i) => (
        <a
          href={item.link}
          rel="noopener noreferrer"
          target="_blank"
          title={item.link}
          key={i + item.link}
        >
          {<item.icon fill={item.color} />}
        </a>
      ))}
    </Container>
  );
};

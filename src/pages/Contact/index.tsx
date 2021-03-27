import { Div, Introduction } from "./styles";
import { SocialMedia } from "../../components/SocialMedia";

export const Contact = () => {
  return (
    <Div>
      <Introduction>
        <h2>{"Contact me"}</h2>
        <p>
          I'm currently searching for job opportunities and freelance projects,
          <br />
          send me an email if you're interested in my services.
        </p>
        <h3> {"amaury.vasquezenriquez@gmail.com"} </h3> <br /> <br />
        <h3> {"Or you can find me on social media"} </h3>
      </Introduction>
      <SocialMedia />
    </Div>
  );
};

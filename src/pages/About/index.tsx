import { Fragment } from "react";
import { AboutInfo, Article } from "./styles";

export const About = () => {
  return (
    <Fragment>
      <Article quote={true}>
        <p>
          “Knowing others is intelligence, knowing yourself is true wisdom.
          Mastering others is strength, mastering yourself is true power.”
          <br />
        </p>
        <h3> {"― Lao Tzu, Tao Te Ching"} </h3>

      </Article>
      <AboutInfo>
        <Article>
          <h3> {"About me"} </h3>
          <p>
            {"High performance chess player."} <br />
            {"Sports man, soccer enthusiast."} <br />
            {"I love new experiences."} <br />
            {"Fan of meeting new and different kinds of people."} <br />
            <br />
          </p>
          <h3> {"Thoughts"} </h3>
          <p>
            {
              "Developers are the people behind the construction of future, i believe that Tech must be used in order to make people life's easier and better."
            }
            <br />
            {
              "Happines comes from trying to become a better person than the one you were the day before."
            }
          </p>
        </Article>
        <Article>
          <h3> {"Experience"} </h3>
          <p>
            {"I'm currently working at personal projects and freelance jobs."}{" "}
            <br />
            {"Proficient React (Typescript) developer."} <br />
            {"C++ for competitive programming."} <br />
            {"Good at HTML and CSS."} <br /> <br />
          </p>
          <h3> {"Proyection"} </h3>
          <p>
            {
              "I learn and try new things everyday so i can become a better dev."
            }{" "}
            <br />
            {
              "Looking forward to specialize in data science and machine learning."
            }
            <br />
            {
              "Looking forward to win a ticket to the ICPC International Collegiate Programming Contest."
            }
            <br />
          </p>
        </Article>
      </AboutInfo>
    </Fragment>
  );
};

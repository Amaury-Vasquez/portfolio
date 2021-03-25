import React from "react";
import { FaReact, FaPython } from "react-icons/fa";
import { SiPlatzi, SiMysql, SiTypescript, SiFlask } from "react-icons/si";

import { Presentation } from "../Presentation";
import { Info, Welcome } from "./styles";

export const Greet = () => {
  return (
    <Welcome>
      <Presentation />
      <Info>
        <h2> {"Hello there, welcome to my portfolio!"} </h2>
        <br />
        <p> I'm a web developer and a tech fan. </p>
        <p> Currently studying computer science at IPN.</p>
        <p>
          Active student at Platzi. <SiPlatzi style={{ fill: "#9ede73" }} />
        </p>
        <br />
        <h3> Skills </h3>
        <p>
          React (proficient) <FaReact style={{ fill: "var(--blue)" }} /> <br />
          Typescript (proficient)
          <SiTypescript style={{ fill: "var(--blue)" }} /> <br />
          Python (intermediate) <FaPython style={{ fill: "var(--blue)" }} />
          <br />
          Flask (beginner) <SiFlask style={{ fill: "var(--red)" }} /> <br />
          MySQL (beginner) <SiMysql /> <br />
        </p>
      </Info>
    </Welcome>
  );
};

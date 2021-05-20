import React from "react";

import { Image, Picture, PresentationCard, Name } from "./styles";

export const Presentation = () => {
  return (
    <PresentationCard>
      <Picture>
        <Image src="https://i.imgur.com/ezQGORA.png" alt="amaury vasquez" />
        <Name> {"amaury vasquez"} </Name>
      </Picture>
    </PresentationCard>
  );
};

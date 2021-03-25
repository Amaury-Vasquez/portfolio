import React from "react";

import { Image, Picture, PresentationCard, Name } from "./styles";

export const Presentation = () => {
  return (
    <PresentationCard>
      <Picture>
        <Image src="https://i.imgur.com/L1RCK7b.jpg" alt="amaury vasquez" />
        <Name> {"amaury vasquez"} </Name>
      </Picture>
    </PresentationCard>
  );
};

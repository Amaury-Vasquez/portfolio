import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaProjectDiagram } from "react-icons/fa";
import { FcAbout, FcFolder, FcHome, FcBusinessContact } from "react-icons/fc";

import { HeaderContainer, Hello, NavBar, NavBarItem } from "./styles";

export const Header = () => {
  const url = useLocation();
  console.log(url);
  const navItems = [
    { icon: <FcHome />, link: "/", text: "home" },
    { icon: <FcAbout />, link: "/about", text: "about" },
    { icon: <FaProjectDiagram />, link: "/projects", text: "projects" },
    { icon: <FcBusinessContact />, link: "/contact", text: "contact" },
  ];
  return (
    <HeaderContainer>
      <Hello>
        <FcFolder />
        <h3>{"Amaury Vasquez"} </h3>
      </Hello>
      <NavBar>
        <ul>
          {navItems.map((item, i) => (
            <NavBarItem
              active={url.pathname === item.link}
              key={i + item.link + item.text}
            >
              <Link to={item.link}>
                <li>
                  {item.text} {item.icon}
                </li>
              </Link>
            </NavBarItem>
          ))}
        </ul>
      </NavBar>
    </HeaderContainer>
  );
};

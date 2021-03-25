import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: var(--content-width);
  height: 8vh;
  display: flex;
  margin: 0 auto;
  border: 1px solid var(--gray);
  border-top: none;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const Hello = styled.div`
  width: 20vw;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  & > svg {
    font-size: 50px;
    margin-right: 2vw;
  }
  & > h3 {
    font-size: 18px;
    font-style: italic;
    font-weight: 500;
    color: var(--gray-text);
  }
`;

export const NavBar = styled.nav`
  display: flex;
  height: 100%;
  width: 30vw;
  align-self: flex-end;
  & > ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
  }
`;

export const NavBarItem = styled.div<{ active: boolean }>`
  height: 6vh;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  & > a {
    color: var(--gray-text);
    font-size: 16px;
    text-transform: capitalize;
    height: 6vh;
    align-self: flex-end;
    display: flex;
    align-items: center;
    padding: 20px;
    & > li > svg {
      margin-left: 0.5vw;
    }
  }
  ${(props) =>
    props.active
      ? "border-bottom: 5px solid var(--red); transition: 0.2s ease;"
      : null}
`;

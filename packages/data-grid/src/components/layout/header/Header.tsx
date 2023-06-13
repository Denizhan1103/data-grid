import React from "react";

import type { NavbarItem, IconItem } from "./Header.d";
import "./Header.scss";

import Logo from "../../../assets/global/Logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} />
      <section className="header__navbar">
        <HeaderNavbarList />
        <HeaderIconList />
      </section>
    </header>
  );
}

function HeaderNavbarList() {
  // TODO: implement router
  // const router = useRouter()

  const navbarItems: NavbarItem[] = [
    {
      name: "Hakkımızda",
      to: "#",
    },
    {
      name: "Juri - Yarışma Yazılımı",
      to: "#",
    },
    {
      name: "Word Ninja",
      to: "#",
    },
    {
      name: "Word Pyramids",
      to: "#",
    },
  ];

  return (
    <ul className="headernavbar">
      {navbarItems.map(({ name, to }) => {
        // Todo: implement router
        return <li className="headernavbar__item">{name}</li>;
      })}
    </ul>
  );
}

function HeaderIconList() {
  const iconList: IconItem[] = [
    {
      icon: "",
      to: "#",
    },
    {
      icon: "",
      to: "#",
    },
    {
      icon: "",
      to: "#",
    },
    {
      icon: "",
      to: "#",
    },
  ];

  return (
    <ul className="headericon">
      {iconList.map(({ icon, to }) => {
        return (
          <li className="headericon__item">
            <img src={icon} />
          </li>
        );
      })}
    </ul>
  );
}

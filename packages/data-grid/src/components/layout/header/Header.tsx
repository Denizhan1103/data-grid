import React from "react";

import type { NavbarItem, IconItem } from "./Header.d";
import "./Header.scss";

import Logo from "../../../assets/global/Logo.svg";

import BeSocialIcon from "../../../assets/header/BeSocial.svg";
import InstagramIcon from "../../../assets/header/Instagram.svg";
import LinkedinIcon from "../../../assets/header/Linkedin.svg";
import YoutubeIcon from "../../../assets/header/Youtube.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} />
      <HeaderNavbarList />
      <HeaderIconList />
    </header>
  );
}

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

function HeaderNavbarList() {
  // TODO: implement router
  // const router = useRouter()

  return (
    <ul className="headernavbar">
      {navbarItems.map(({ name, to }) => {
        // Todo: implement router
        return <li className="headernavbar__item">{name}</li>;
      })}
    </ul>
  );
}

const iconList: IconItem[] = [
  {
    icon: YoutubeIcon,
    to: "#",
  },
  {
    icon: InstagramIcon,
    to: "#",
  },
  {
    icon: BeSocialIcon,
    to: "#",
  },
  {
    icon: LinkedinIcon,
    to: "#",
  },
];

export function HeaderIconList() {
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

import React from "react";

import type { NavbarItem, ComponentProperties } from "./HeaderDrawer.d";
import "./HeaderDrawer.scss";

import { Drawer } from "../../lib";
import { HeaderIconList } from "../header";

import Logo from "../../../assets/global/Logo.svg";

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

export default function HeaderDrawer({ onClose }: ComponentProperties) {
  return (
    <Drawer onClose={onClose}>
      <div className="headerdrawer">
        <img className="headerdrawer__logo" src={Logo} />
        <ul className="headerdrawer__list">
          {navbarItems.map(({ name }) => {
            return (
              <li key={name} className="headerdrawer__list-item">
                {name}
              </li>
            );
          })}
        </ul>
        <div className="headerdrawer__icon">
          <HeaderIconList />
        </div>
      </div>
    </Drawer>
  );
}

import React from "react";

import "./Main.scss";

import { Input, Button } from "../../components/lib";

import SearchIcon from "../../assets/lib/Search.svg";
import FilterIcon from "../../assets/lib/Filter.svg";
import PlusIcon from "../../assets/lib/Plus.svg";

export default function Main() {
  return (
    <div className="main">
      <section className="main__header">
        <div className="main__header--filter">
          <Input placeholder="Arama yap..." />
          <Button icon={SearchIcon} />
          <Button icon={FilterIcon} />
        </div>
        <div className="main__header--buttons">
          <Button icon={PlusIcon} name="Yeni Hesap Ekle" />
        </div>
      </section>
      <section className="main__table"></section>
      <section className="main__footer"></section>
      <div className="hello">alo</div>
    </div>
  );
}

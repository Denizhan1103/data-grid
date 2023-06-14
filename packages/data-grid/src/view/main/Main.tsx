import React from "react";

import "./Main.scss";

import { Input, Button, Table } from "../../components/lib";

import SearchIcon from "../../assets/lib/Search.svg";
import FilterIcon from "../../assets/lib/Filter.svg";
import PlusIcon from "../../assets/lib/Plus.svg";

const tableHeaderData = [
  {
    name: "Sosyal Medya Linki",
    accessor: "link",
    sortable: true,
    defaultSortingValue: "increment",
  },
  {
    name: "Sosyal Medya Adı",
    accessor: "name",
    sortable: true,
  },
  {
    name: "Açıklama",
    accessor: "description",
  },
];

const tableData = [
  {
    id: 1,
    name: "Linkedin",
    link: "linkedin.com",
    description: "öyle işte",
  },
  {
    id: 2,
    name: "İnsta",
    link: "insta.com",
  },
  {
    id: 3,
    name: "Youtube",
    description: "garip mekan",
  },
];

const tableMetaData = {
  totalDataCount: 3,
  currentPage: 1,
  rowPerPage: 4,
};

export default function Main() {
  return (
    <div className="main">
      <section className="main__header">
        <div className="main__header-filter">
          <Input placeholder="Arama yap..." className="filter__input" />
          <Button icon={SearchIcon} className="filter__search" />
          <Button
            icon={FilterIcon}
            className="filter__filterdetail"
            type="secondary"
          />
        </div>
        <Button
          icon={PlusIcon}
          name="Yeni Hesap Ekle"
          className="main__header-button"
        />
      </section>
      <section className="main__table">
        <Table header={tableHeaderData} data={tableData} meta={tableMetaData} />
      </section>
    </div>
  );
}

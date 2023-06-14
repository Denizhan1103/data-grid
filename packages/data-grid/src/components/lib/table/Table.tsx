import React from "react";

import { ComponentProperties } from "./Table.d";
import "./Table.scss";

export default function Table({
  data = [],
  meta,
  header,
}: ComponentProperties) {
  const checkDataPerItem = (perItem: unknown) => {
    if (typeof perItem === "object" && perItem !== null && "id" in perItem)
      return true;
    return false;
  };

  return (
    <table className="table">
      <thead className="table__header">
        <tr className="table__header-row">
          {header.map(({ name, accessor }) => {
            return (
              <th className="table__header-col" key={accessor}>
                <div className="table__header-colcontainer">
                  {name}
                  <div className="table__header-colicon">X</div>
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((perItem) => {
          if (!checkDataPerItem(perItem)) {
            throw new Error(
              "Unexpected data type. Every item in data must be has id parameter."
            );
          }
          return (
            <tr key={perItem.id}>
              {header.map(({ accessor }) => {
                return <td>{perItem[accessor]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

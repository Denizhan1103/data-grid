import React, { useState } from "react";

import { ComponentProperties } from "./Table.d";
import "./Table.scss";

// TODO: fix
import { Input } from "../../lib";

// Active icon looking to left side as default also passive looking right
import ArrowActiveIcon from "../../../assets/lib/ArrowActive.svg";
import ArrowPassiveIcon from "../../../assets/lib/ArrowPassive.svg";

export default function Table({
  data = [],
  meta,
  header,
}: ComponentProperties) {
  // TODO: ask typing
  const [currentActiveSorter, setCurrentActiveSorter] = useState<string | null>(
    null
  );
  const [showRowCount, setShowRowCount] = useState<number>(4);

  const checkDataPerItem = (perItem: unknown) => {
    if (typeof perItem === "object" && perItem !== null && "id" in perItem)
      return true;
    return false;
  };

  return (
    <React.Fragment>
      <table className="table">
        <thead className="table__header">
          <tr className="table__header-row">
            {header.map(
              ({
                name,
                accessor,
                sortable = false,
                defaultSortingValue = "decrement",
              }) => {
                return (
                  <th className="table__header-col" key={accessor}>
                    <div className="table__header-colcontainer">
                      {name}
                      <div className="table__header-colicon">X</div>
                    </div>
                  </th>
                );
              }
            )}
          </tr>
        </thead>
        <tbody className="table__body">
          {data.map((perItem) => {
            if (!checkDataPerItem(perItem)) {
              throw new Error(
                "Unexpected data type. Every item in data must be has id parameter."
              );
            }
            return (
              <tr className="table__body-row" key={perItem.id}>
                {header.map(({ accessor }) => {
                  return (
                    <td className="table__body-col">{perItem[accessor]}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <section className="table__footer">
        <div className="table__footer-show">
          <p className="show__title">Show:</p>
          <Input
            className="show__input"
            type="number"
            startValue={showRowCount}
          />
        </div>
        <div className="table__footer-pagination">
          <img className="pagination__prev" />
          <Input
            className="pagination__current"
            startValue={meta.currentPage}
          />
          <span className="pagination__of">of</span>
          <span className="pagination__last">
            {Math.ceil(meta.totalDataCount / meta.rowPerPage)}
          </span>
          <img className="pagination__next" />
        </div>
      </section>
    </React.Fragment>
  );
}

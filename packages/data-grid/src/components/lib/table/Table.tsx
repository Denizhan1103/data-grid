import React from "react";

import { ComponentProperties } from "./Table.d";
import "./Table.scss";

export default function Table({ data, meta, header }: ComponentProperties) {
  return (
    <table>
      <thead>
        <tr>
          {header.map(({ name }) => {
            return <th>{name}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((perItem) => {
          return (
            <tr>
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

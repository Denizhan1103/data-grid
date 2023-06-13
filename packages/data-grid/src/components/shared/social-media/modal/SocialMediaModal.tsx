import React from "react";

import {
  ComponentProperties,
  FormData,
  KeyAccessor,
} from "./SocialMediaModal.d";
import "./SocialMediaModal.scss";

// TODO: fix relative path
import { Modal, Input, Button } from "../../../lib";

const inputNameAccessor: KeyAccessor[] = [
  {
    name: "Sosyal Medya Linki",
    accessor: "link",
  },
  {
    name: "Sosyal Medya Adı",
    accessor: "name",
  },
  {
    name: "Açıklama",
    accessor: "description",
  },
];

export default function SocialMediaModal({ onClose }: ComponentProperties) {
  const [formData, setFormData] = React.useState<Partial<FormData>>({});

  const handleChange = (accessor: string, val: string) => {
    setFormData({ ...formData, [accessor]: val });
  };

  return (
    <Modal onClose={onClose}>
      {inputNameAccessor.map(({ name, accessor }) => {
        return (
          <div className="scmedia">
            <p className="scmedia__title">{name}</p>
            <Input
              className="scmedia__input"
              onChange={({ target }) => handleChange(accessor, target.value)}
            />
          </div>
        );
      })}
      <div className="scmedia__buttons">
        <Button name="Vazgeç" type="secondary" width={82} height={37} />
        <Button name="Kaydet" width={82} height={37} />
      </div>
    </Modal>
  );
}

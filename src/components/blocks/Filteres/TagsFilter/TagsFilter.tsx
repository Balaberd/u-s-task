import React, { useState } from "react";
import { TFilterTag } from "../../../../lib/types/filteres";
import { Input } from "../../../shared/Input/Input";
import styles from "./TagsFilter.module.css";

const TAGS_LIST: TFilterTag[] = ["red", "blue", "green", "orange"];

interface Props {
  tags: string[];
  changeTags: (tag: string) => void;
}

export const TagsFilter: React.FC<Props> = ({ tags, changeTags }) => {
  const [value, setValue] = useState("");

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const filteredTags = TAGS_LIST.filter((tag) => tag.includes(value));

  return (
    <div className={styles.TagsFilter}>
      <Input
        placeholder="Поиск по тегам"
        value={value}
        onChange={handleValueChange}
      />

      <div className={styles.tagsList}>
        {filteredTags.map((tag) => (
          <label key={tag} className={styles.tagItem}>
            <input
              type="checkbox"
              defaultChecked={tags.includes(tag)}
              onChange={() => changeTags(tag)}
            />
            <span>{tag}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { Dropdown } from "../../shared/Dropdown/Dropdown";
import { PcTypeFilter } from "./PcTypeFilter/PcTypeFilter";
import { TagsFilter } from "./TagsFilter/TagsFilter";
import { IFilteres } from "../../../lib/types/filteres";
import { useSearchParams } from "react-router-dom";
import cn from "classnames";
import styles from "./Filteres.module.css";

interface Props {
  filteres: IFilteres;
}

export const Filteres: React.FC<Props> = ({ filteres }) => {
  const [newFilteres, setNewFilteres] = useState(filteres);
  const [_, setSearchParams] = useSearchParams();

  const handleChangePcType = (newType: string) => {
    if (newFilteres.pc_type === newType) {
      return;
    } else {
      setNewFilteres({ ...newFilteres, pc_type: newType, page: "1" });
    }
  };

  const tags = newFilteres.tags ? newFilteres.tags.split(" ") : [];

  const handleChangeTags = (tag: string) => {
    let newTags;
    if (tags.includes(tag)) {
      newTags = tags.filter((el) => tag !== el).join(" ");
    } else {
      newTags = [...tags, tag].join(" ");
    }
    setNewFilteres({ ...newFilteres, tags: newTags, page: "1" });
  };

  const handleSetFilteres = () => {
    setSearchParams({ ...newFilteres });
  };

  const resetNewFilteres = () => {
    setNewFilteres(filteres);
  };

  return (
    <div className={styles.Filteres}>
      <div className={styles.title}>Фильтры</div>

      <div className={styles.filter}>
        Тип ПК
        <Dropdown
          droppedBlockClassNames={styles.droppedBlock}
          trigger={
            <button className={styles.triggerButton}>
              {newFilteres.pc_type ?? "Выбрать"}
            </button>
          }
        >
          <PcTypeFilter
            currentType={newFilteres.pc_type}
            changeType={handleChangePcType}
          />
        </Dropdown>
      </div>

      <div className={styles.filter}>
        Теги
        <Dropdown
          droppedBlockClassNames={styles.droppedBlock}
          trigger={
            <button className={styles.triggerButton}>
              {newFilteres.tags
                ? newFilteres.tags.split(" ").join(", ")
                : "Выбрать"}
            </button>
          }
        >
          <TagsFilter tags={tags} changeTags={handleChangeTags} />
        </Dropdown>
      </div>

      <div className={styles.buttonsBlock}>
        <button
          className={cn(styles.actionButton, styles.actionButton_apply)}
          onClick={handleSetFilteres}
        >
          Применить
        </button>
        <button
          className={cn(styles.actionButton, styles.actionButton_cancel)}
          onClick={resetNewFilteres}
        >
          Сбросить
        </button>
      </div>
    </div>
  );
};

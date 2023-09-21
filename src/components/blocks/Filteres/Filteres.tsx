import React, { useState } from "react";
import { Dropdown } from "../../shared/Dropdown/Dropdown";
import styles from "./Filteres.module.css";
import { PcTypeFilter } from "./PcTypeFilter/PcTypeFilter";
import { TagsFilter } from "./TagsFilter/TagsFilter";

interface Props {}

export const Filteres: React.FC<Props> = () => {
  const [filter, setFilter] = useState({ pcType: "default", tags: [] });

  const handleChangePcType = (newType: string) => {
    if (filter.pcType === newType) {
      return;
    } else {
      setFilter({ ...filter, pcType: newType });
    }
    console.log("NEW TYPE:", filter.pcType);
  };

  // const handleChangeTags = (newTag: string) => {
  //   if (tagList.includes(newTag)) {
  //     setFilter(filter.tags.filter((tag) => tag !== newTag));
  //   } else {
  //     setFilter({ ...filter, tags: [...filter.tags, newTag] });
  //   }
  // };

  return (
    <div className={styles.Filteres}>
      <div className={styles.title}>Фильтры</div>

      <div className={styles.filter}>
        Тип ПК
        <Dropdown
          droppedBlockClassNames={styles.droppedBlock}
          trigger={<button className={styles.triggerButton}>Выбрать</button>}
        >
          <PcTypeFilter
            currentType={filter.pcType}
            changeType={handleChangePcType}
          />
        </Dropdown>
      </div>

      <div className={styles.filter}>
        Теги
        <Dropdown
          droppedBlockClassNames={styles.droppedBlock}
          trigger={<button className={styles.triggerButton}>Выбрать</button>}
        >
          <TagsFilter />
        </Dropdown>
      </div>

      <div className={styles.buttonsBlock}>
        <button>Применить</button>
        <button>Сбросить</button>
      </div>
    </div>
  );
};

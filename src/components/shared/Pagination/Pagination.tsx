import cn from "classnames";
import styles from "./Pagination.module.css";

interface Props {
  currentPage: number;
  pagesLength: number;
  changePage: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  currentPage,
  pagesLength,
  changePage,
}) => {
  const pages = [];

  if(pagesLength < 2) {
    return null
  }

  for (let i = 0; i < pagesLength; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => changePage(i + 1)}
        className={cn(styles.PaginationItem, {
          [styles.PaginationItem_active]: i + 1 === +currentPage,
        })}
      >
        {i + 1}
      </button>
    );
  }

  return <div className={styles.Pagination}>{pages}</div>;
};

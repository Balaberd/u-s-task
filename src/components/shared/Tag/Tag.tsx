import cn from "classnames";
import styles from "./Tag.module.css";

interface Props {
  tag: string;
}

export const Tag: React.FC<Props> = ({ tag }) => {
  if (!tag) {
    return null;
  }

  const tagPropStyle = `Tag_${tag}`;

  return <div className={cn(styles.Tag, styles[tagPropStyle])}>{tag}</div>;
};

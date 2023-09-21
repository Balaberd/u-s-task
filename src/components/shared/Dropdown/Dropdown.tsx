import { ReactElement, useRef, useState, cloneElement } from "react";
import { useClickOutside } from "./helpers/useClickOutside";
import { mixHandlers } from "./helpers/mixHandlers";
import cn from "classnames";
import styles from "./Dropdown.module.css";

interface Props {
  trigger: ReactElement;
  children: any;
  droppedBlockClassNames?: string;
  isActive?: boolean;
}

export const Dropdown: React.FC<Props> = ({
  trigger,
  children,
  droppedBlockClassNames,
  isActive = false,
}) => {
  const [isOpen, setIsOpen] = useState(isActive);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const toggleDropdown = () => setIsOpen(!isOpen);

  const triggerElement = cloneElement(trigger, {
    onClick: mixHandlers(toggleDropdown, trigger.props.onClick),
  });

  return (
    <div ref={dropdownRef} className={styles.wrapper}>
      {triggerElement}
      {isOpen && (
        <div
          className={cn(styles.droppedBlockWrapper, droppedBlockClassNames)}
        >
          {children}
        </div>
      )}
    </div>
  );
};

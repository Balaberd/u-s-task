import React, { MouseEvent, useEffect } from "react";

export const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  // eslint-disable-next-line no-unused-vars
  handler: (event: MouseEvent | TouchEvent) => void
): void => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener as EventListener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener as EventListener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export const mixHandlers =
  (handler1: () => void, handler2?: () => void) => () => {
    handler1();
    if (handler2) {
      handler2();
    }
  };

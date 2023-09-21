export const debounce = (
  callback: (arg: any) => void,
  delay: number
): ((arg: any) => void) => {
  let timeout: NodeJS.Timeout;
  return (arg: any): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(arg), delay);
  };
};

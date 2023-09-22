export const hasSameElements = (array1: string[], array2: string[]) => {
  const activeElements: { [key: string]: boolean } = {};
  array1.forEach((el) => {
    activeElements[el] = true;
  });

  for (let i = 0; i < array2.length; i++) {
    if (activeElements[array2[i]]) {
      return true;
    }
  }

  return false;
};

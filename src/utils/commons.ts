/* eslint-disable prettier/prettier */
export const isEmpty = (object: any) => {
  if (object) {
    return Object.keys(object)?.length === 0;
  }
  return false;
};

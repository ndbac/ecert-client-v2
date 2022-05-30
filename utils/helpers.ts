export const getItemFromLocalStorage = (name: string) => {
  if (typeof window !== "undefined") return localStorage.getItem(name);
  return null;
};

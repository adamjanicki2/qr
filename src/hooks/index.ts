import { useCache as _useCache } from "@adamjanicki/core-ui";
export { useAlert } from "@adamjanicki/core-ui";
export { default as useDocumentTitle } from "src/hooks/useDocumentTitle";

export const useCache = <T>() => {
  const { get, set } = _useCache<T>("qr-cache", "local");
  return {
    get,
    set: (key: string, value: T) => set(key, value, 999999999999999),
  };
};

import { useCallback } from "react";
import { create } from "zustand";

const storageKey = "qr-cache";

const readCache = (): Record<string, unknown> => {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      return {};
    }
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      return parsed;
    }
  } catch {
    return {};
  }
  return {};
};

const writeCache = (data: Record<string, unknown>) =>
  localStorage.setItem(storageKey, JSON.stringify(data));

type CacheState = {
  data: Record<string, unknown>;
  setItem: (key: string, value: unknown) => void;
};

const useCacheStore = create<CacheState>()((set) => ({
  data: readCache(),
  setItem: (key, value) =>
    set((state) => {
      const next = {
        ...state.data,
        [key]: value,
      };
      writeCache(next);
      return { data: next };
    }),
}));

const useCache = <T>() => {
  const data = useCacheStore((state) => state.data);
  const setItem = useCacheStore((state) => state.setItem);
  const get = useCallback((key: string) => data[key] as T | undefined, [data]);
  const set = useCallback(
    (key: string, value: T) => setItem(key, value),
    [setItem]
  );
  return { get, set };
};

export default useCache;

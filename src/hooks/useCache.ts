import { useCallback } from "react";
import { createStore, persist } from "@adamjanicki/store";

const storageKey = "qr-cache";

type CacheState = {
  data: Record<string, unknown>;
};

const useCacheStore = createStore<CacheState>({
  init: {
    data: {},
  },
  plugins: [
    persist({
      key: storageKey,
      storage: "local",
    }),
  ],
});

const useCache = <T>() => {
  const [state, setState] = useCacheStore();

  const get = useCallback(
    (key: string) => state.data[key] as T | undefined,
    [state],
  );

  const set = useCallback(
    (key: string, value: T) => {
      setState((prev) => ({
        ...prev,
        data: {
          ...prev.data,
          [key]: value,
        },
      }));
    },
    [setState],
  );

  return { get, set };
};

export default useCache;

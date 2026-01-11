import { create } from "zustand";

const DURATION = 4500;

export type Alert = {
  message: string;
  type: "success" | "error" | "info" | "warning" | "static";
};

export type AlertStore = {
  alert?: Alert;
  setAlert: (alert: Alert, duration?: number) => void;
  timeout?: NodeJS.Timeout;
};

const useAlert = create<AlertStore>((set) => ({
  alert: undefined,
  timeout: undefined,
  setAlert: (alert: Alert, duration = DURATION) =>
    set((state) => {
      if (state.timeout) clearTimeout(state.timeout);
      const timeout = setTimeout(() => set({ alert: undefined }), duration);
      return { alert, timeout };
    }),
}));

export default useAlert;

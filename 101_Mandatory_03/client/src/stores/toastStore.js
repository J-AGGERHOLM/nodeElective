import { writable } from "svelte/store";

export const toast = writable({ message: "", type: ""});

export function showToast(message, type = "success") {
  toast.set({ message, type });
  setTimeout(() => toast.set({ message: "", type: "" }), 5000);
}

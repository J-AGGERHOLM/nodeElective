import { writable } from "svelte/store"

export const nickname = writable()

//we'll use this writeble to persist a nickname on the client
import { readable } from "svelte/store"

export const BASE_URL = readable("http://localhost:8080");

//to keep track of our backend, if deployed we'd change this
import { BASE_URL } from "../stores/storesConfig";

export async function fetchGet(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      credentials: "include",
    });
    const data = await response.json();
    return { ok: response.ok, data };
  } catch (error) {
    console.log(error);
  }
}

export async function fetchPost(endpoint, body) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return { ok: response.ok, data };
  } catch (error) {
    console.log(error);
  }
}

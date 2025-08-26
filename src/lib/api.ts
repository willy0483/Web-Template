import { BACKEND_URL } from "./constants";

export const api = {
  async get(url: string, slug?: string, id?: number) {
    let endpoint = `${BACKEND_URL}/${url}`;
    if (slug) {
      endpoint = `${BACKEND_URL}/${url}/${slug}`;
    }
    if (id) {
      endpoint += `${BACKEND_URL}/${url}/${id}`;
    }
    const res = await fetch(endpoint);
    const data = await res.json();
    return data;
  },
};

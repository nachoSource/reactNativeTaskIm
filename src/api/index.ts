// @ts-ignore
import { API_URL } from "@env";

class Api {
  apiUrl = API_URL;

  get = async (url: string) => {
    const init: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "AIC-User-Agent": "Artic API challenge (ignacio5mattos@gmail.com)",
      },
    };

    try {
      const response = await fetch(`${this.apiUrl}${url}`, init);
      const data = await response.json();

      console.log(`GET ${url}`, data);
      return data;
    } catch (e) {
      console.log(`Error GET ${url}`, e);
    }
  };

  // TODO implement these
  post = () => ({});
  put = () => ({});
  delete = () => ({});
}

export default new Api();

// @ts-ignore
import { API_TOKEN, API_URL } from "@env";

class Api {
  apiUrl = API_URL;
  token = API_TOKEN;

  get = async (url: string) => {
    const init: RequestInit = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.token}`,
        "Content-Type": "application/json",
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

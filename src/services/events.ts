import Api from "../api";

const fetchEvents = async (page = 0): Promise<any[]> =>
  await Api.get(`/events?page=${page}`);

export { fetchEvents };

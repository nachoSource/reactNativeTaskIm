import Api from "../api";

const fetchEvents = async (): Promise<any[]> => await Api.get("/events");

export { fetchEvents };

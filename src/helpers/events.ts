import { EventItemProps } from "../interfaces/events";

const formatDate = (date: Date): String => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours || "00"}:${minutes || "00"}`;
};

const parseEventsData = (res: any[]): EventItemProps[] => {
  return res
    .filter(({ id }) => !!id)
    .map(
      ({
        api_link,
        description,
        id,
        is_free,
        location,
        start_date,
        start_time,
        image_url,
        title,
      }) => {
        let parsedDate = new Date(start_date);
        const [hours, minutes] = start_time.split(":");
        // TODO review this to avoid messy date parsing
        parsedDate.setUTCHours(hours * 60 * 60 * 1000);
        parsedDate.setUTCMinutes(minutes * 60 * 1000);
        parsedDate.setSeconds(0);

        return {
          id: Number(id),
          date: parsedDate,
          description: String(description),
          isFree: !!is_free,
          location: String(location),
          imageUrl: String(image_url),
          title: String(title),
          url: String(api_link),
        };
      }
    );
};

export { formatDate, parseEventsData };

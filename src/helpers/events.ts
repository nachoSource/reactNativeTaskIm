import { EventItemProps } from "../interfaces/events";

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
        // TODO fix this
        let parsedDate = new Date(start_date);
        parsedDate.setTime(start_time);
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

export { parseEventsData };

import groupBy from "lodash/fp/groupBy";
import take from "lodash/fp/take";

import { createContext } from "react";

import { activities, categories, testimonials } from "../../assets/mock.json";

const getCategoriesMap = () => {
  const categoriesMap = categories.reduce((map, category) => {
    const { id } = category;
    map[id] = category;
    return map;
  }, {});

  return categoriesMap;
};

export const ActiveUnityProviderContext = createContext({
  getFeaturedActivities: () => {},
  getCategories: () => {},
  getUpcomingEvents: () => {},
  getTestimonials: () => {},
  getEventByID: () => {},
});

export const ActiveUnityProvider = ({ children }) => {
  const combineDateTime = (date, time) => new Date(`${date}T${time}`);

  const toEventDate = (event) =>
    new Date(`${event.start_date}T${event.start_time}`);

  const getTheLatestEventsOfCategoryGroupedEvents = (groupedEvents) => {
    const latestEvents = Object.values(groupedEvents).flatMap((events) => {
      const latestEventOfCategory = events.reduce((latest, current) => {
        const latestDateTime = combineDateTime(
          latest.start_date,
          latest.start_time
        );
        const currentDateTime = combineDateTime(
          current.start_date,
          current.start_time
        );
        return currentDateTime > latestDateTime ? current : latest;
      });
      return latestEventOfCategory;
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const closestEvents = latestEvents
      .map((event) => ({ ...event, date: toEventDate(event) }))
      .filter((event) => event.date > today)
      .sort((a, b) => a.date - b.date);

    return closestEvents;
  };

  const combineEventsWithCategoryName = (events) => {
    const categoriesMap = getCategoriesMap();

    const result = events.map((event) => ({
      ...event,
      category: categoriesMap?.[event?.category_id]?.name || "",
    }));
    return result;
  };

  /**
   * Get certain numbers of events, default to 5
   * This function respect the categories, and only return future events
   * @param {Number} takeNEvents - specify how many events do you need, from 1 - 7
   * @returns {Array} - array of events
   */
  const getFeaturedActivities = (takeNEvents = 5) => {
    const groupedEvents = groupBy("category_id")(activities);
    const latestEvents =
      getTheLatestEventsOfCategoryGroupedEvents(groupedEvents);

    const nEvents = take(takeNEvents)(latestEvents);
    const result = combineEventsWithCategoryName(nEvents);
    return result;
  };

  /**
   * Get certain numbers of events, default to 5
   * This function do not respect the categories, and only return future events
   * @param {Number} takeNEvents - specify how many events do you need, from 1 - 20
   * @returns {Array} - array of events
   */
  const getUpcomingEvents = (takeNEvents = 5) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const closestEvents = activities
      .map((event) => ({ ...event, date: toEventDate(event) }))
      .filter((event) => event.date > today)
      .sort((a, b) => a.date - b.date);

    const nEvents = take(takeNEvents)(closestEvents);
    const result = combineEventsWithCategoryName(nEvents);

    return result;
  };

  /**
   * get a single event by their ID
   * @param {Number} id - Event ID
   * @returns {Event|undefined} returns a single event or undefined if no found with that `id`
   */
  const getEventByID = (id) => {
    const event = activities.find((event) => event.id === Number(id));
    if (!event) return undefined;

    // sorry for this ugly approach, I don't want change `combineEventsWithCategoryName`
    const [result] = combineEventsWithCategoryName([event]);
    return result;
  };

  /**
   * get the categories
   * @returns {Array} list of categories
   */
  const getCategories = () => {
    const categoriesMap = getCategoriesMap();
    return Object.values(categoriesMap);
  };

  /**
   * get the testimonials
   * @returns {Array} list of testimonials
   */
  const getTestimonials = () => testimonials;

  const value = {
    getFeaturedActivities,
    getUpcomingEvents,
    getCategories,
    getTestimonials,
    getEventByID,
  };

  return (
    <ActiveUnityProviderContext.Provider value={value}>
      {children}
    </ActiveUnityProviderContext.Provider>
  );
};

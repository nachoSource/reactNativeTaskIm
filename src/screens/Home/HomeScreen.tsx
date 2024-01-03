import React, { ReactElement, useEffect } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { EventsList, FavEventsList } from "../../components";
import { HomeScreenProps } from "../../interfaces/screens";
import { FETCH_EVENTS_REQUEST } from "../../store/actions/types";
import BaseLayout from "../BaseLayout";

const HomeScreen = ({
  error,
  events,
  pagination,
  pending,
  fetchEvents,
}: HomeScreenProps): ReactElement => {
  const keepSearching = pagination?.current_page < pagination?.total_pages;

  useEffect(() => {
    if (!pending) {
      fetchEvents(0);
    }
  }, []);

  const handleListEndOfReach = () => {
    if (keepSearching) {
      fetchEvents(pagination.current_page + 1, false);
    }
  };

  return (
    <BaseLayout>
      <View>
        <FavEventsList />
        <EventsList
          data={events}
          error={error}
          keepSearching={keepSearching}
          handleEndReached={handleListEndOfReach}
        />
      </View>
    </BaseLayout>
  );
};

export default connect(
  (state: any) => ({
    error: state.events.error,
    events: state.events.data,
    pagination: state.events.pagination,
    pending: state.events.pending,
  }),
  (dispatch) => {
    return {
      fetchEvents: (page: Number, reset: Boolean) =>
        dispatch({ type: FETCH_EVENTS_REQUEST, page, reset }),
    };
  }
)(HomeScreen);

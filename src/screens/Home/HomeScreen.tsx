import React, { ReactElement, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { connect } from "react-redux";
import { EventsList, FavEventsList } from "../../components";
import { HomeScreenProps } from "../../interfaces/screens";
import { FETCH_EVENTS_REQUEST } from "../../store/actions/types";
import { colors } from "../../styles/global.styles";
import BaseLayout from "../BaseLayout";

const HomeScreen = ({
  error,
  events,
  pending,
  fetchEvents,
}: HomeScreenProps): ReactElement => {
  useEffect(() => {
    if (!pending) {
      fetchEvents();
    }
  }, []);

  return (
    <BaseLayout>
      <View>
        <FavEventsList />
        {pending && <ActivityIndicator size="large" color={colors.white} />}
        {/*@ts-ignore*/}
        {!pending && <EventsList error={error} data={events} />}
      </View>
    </BaseLayout>
  );
};

export default connect(
  (state: any) => ({
    error: state.events.error,
    events: state.events.data,
    pending: state.events.pending,
  }),
  (dispatch) => {
    return {
      fetchEvents: () => dispatch({ type: FETCH_EVENTS_REQUEST }),
    };
  }
)(HomeScreen);

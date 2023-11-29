import React, { PropsWithChildren, ReactElement, useEffect } from "react";
import { NavigationProp } from "@react-navigation/core/src/types";
import { ActivityIndicator, View } from "react-native";
import { connect } from "react-redux";
import { BackButton, ParticipantsList } from "../../components";
import { ParticipantProps } from "../../components/ParticipantsList/Participant";
import { FETCH_PARTICIPANTS_REQUEST } from "../../store/actions/types";
import { colors } from "../../styles/global.styles";
import BaseLayout from "../BaseLayout";

type ParticipantsScreenProps = PropsWithChildren<{
  error: boolean;
  navigation: NavigationProp<ReactNavigation.RootParamList>;
  participants: ParticipantProps | [];
  pending: boolean;
  fetchParticipants: () => {};
}>;

const ParticipantsScreen = ({
  error,
  navigation,
  participants,
  pending,
  fetchParticipants,
}: ParticipantsScreenProps): ReactElement => {
  useEffect(() => {
    if (!pending) {
      fetchParticipants();
    }
  }, []);

  return (
    <BaseLayout>
      <View>
        <BackButton navigation={navigation} />
        {pending && <ActivityIndicator size="large" color={colors.white} />}
        {/*@ts-ignore*/}
        {!pending && <ParticipantsList error={error} data={participants} />}
      </View>
    </BaseLayout>
  );
};

export default connect(
  (state: any) => ({
    error: state.participants.error,
    participants: state.participants.data,
    pending: state.participants.pending,
  }),
  (dispatch) => {
    return {
      fetchParticipants: () => dispatch({ type: FETCH_PARTICIPANTS_REQUEST }),
    };
  }
)(ParticipantsScreen);

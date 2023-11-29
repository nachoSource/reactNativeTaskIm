import React, { PropsWithChildren, ReactElement } from "react";
import { View } from "react-native";
import { Touchable } from "../../components";
import styles from "./HomeScreen.styles";
import BaseLayout from "../BaseLayout";
import { NavigationProp } from "@react-navigation/core/src/types";

type HomeScreenProps = PropsWithChildren<{
  navigation: NavigationProp<ReactNavigation.RootParamList>;
}>;

const HomeScreen = ({ navigation }: HomeScreenProps): ReactElement => {
  const navigateToParticipants = () => navigation.navigate("Participants");

  return (
    <BaseLayout>
      <View style={styles.container}>
        <Touchable label="participantes" onPress={navigateToParticipants} />
      </View>
    </BaseLayout>
  );
};

export default HomeScreen;

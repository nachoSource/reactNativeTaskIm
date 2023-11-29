import React, { PropsWithChildren } from "react";
import { FlatList, View } from "react-native";
import Participant from "./Participant";
import styles from "./ParticipantsList.style";
import Text from "../Text";

type ParticipantListProps = PropsWithChildren<{
  data: [any] | [];
  error: boolean;
}>;

// TODO review styles
const ParticipantsList = ({ data = [], error }: ParticipantListProps) => (
  <View style={styles.list}>
    {!!data.length && !error && (
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <Participant dark={!!(index % 2)} item={item} />
        )}
      />
    )}
    {error && (
      <Text style={styles.error}>
        Hubo un error al buscar la información de los participantes.
      </Text>
    )}
  </View>
);

export default ParticipantsList;

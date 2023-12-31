import React, { ReactElement } from "react";
import { FlatList, View } from "react-native";
import { EventListProps } from "../../interfaces/components";
import Text from "../Text";
import Event from "./Event";
import styles from "./EventsList.style";

// TODO add infinite scroll
// TODO review styles
const EventsList = ({ data = [], error }: EventListProps): ReactElement => (
  <View style={styles.list}>
    {!!data.length && !error && (
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <Event dark={!!(index % 2)} item={item} />
        )}
      />
    )}
    {error && (
      <Text style={styles.error}>
        Hubo un error al buscar la información de los eventos.
      </Text>
    )}
  </View>
);

export default EventsList;

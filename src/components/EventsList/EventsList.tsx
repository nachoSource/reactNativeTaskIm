import React, { ReactElement, useEffect, useRef } from "react";
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Easing,
  FlatList,
  View,
} from "react-native";
import { EventListProps } from "../../interfaces/components";
import { colors } from "../../styles/global.styles";
import Text from "../Text";
import Event from "./Event";
import styles from "./EventsList.style";

const EventsList = ({
  data = [],
  error,
  keepSearching = true,
  handleEndReached,
}: EventListProps): ReactElement => {
  const listMaxHeight = (Dimensions.get("screen").height * 80) / 100;
  const heightAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(heightAnim, {
      delay: 1700, // TODO remove this if possible
      duration: 1700,
      easing: Easing.in(Easing.quad),
      toValue: listMaxHeight,
      useNativeDriver: false,
    }).start();
  }, [heightAnim]);

  return (
    <View style={styles.list}>
      {!data?.length && !error && (
        <ActivityIndicator size="large" color={colors.black} />
      )}
      {!!data?.length && !error && (
        <Animated.View
          style={{
            height: heightAnim,
          }}
        >
          <View>
            <FlatList
              data={data}
              renderItem={({ item, index }) => (
                <Event dark={!!(index % 2)} item={item} />
              )}
              ListFooterComponent={
                keepSearching ? (
                  <ActivityIndicator size="large" color={colors.black} />
                ) : (
                  <></>
                )
              }
              onEndReached={() => handleEndReached()}
            />
          </View>
        </Animated.View>
      )}
      {error && (
        <Text style={styles.error}>
          Hubo un error al buscar la información de los eventos.
        </Text>
      )}
    </View>
  );
};

export default EventsList;

import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SelectDropdown from "react-native-select-dropdown";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { formatDate } from "../../helpers/events";
import { FavEventsListProps } from "../../interfaces/components";
import { EventComponentProps, EventItemProps } from "../../interfaces/events";
import { SAVE_CURRENT_EVENT } from "../../store/actions/types";
import Text from "../Text";
import styles from "./FavEvents.style";

const FavEventsList = ({ events = [], selectEvent }: FavEventsListProps) => {
  const navigation = useNavigation();
  const [filteredEvents, setFilteredEvents] = useState<EventItemProps[]>([]);

  useEffect(() => {
    const getFavoriteEvents = async () => {
      try {
        return await AsyncStorage.getItem("favoriteEvents");
      } catch (e) {
        console.log("Error while reading AsyncStorage", e);
      }
    };

    if (!!events?.length) {
      getFavoriteEvents().then((fe) => {
        setFilteredEvents(events.filter((e) => JSON.parse(fe).includes(e.id)));
      });
    }
  }, [events]);

  const handleNavigate = (e) => {
    selectEvent(e);
    navigation.navigate("Event");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eventos guardados: </Text>
      <SelectDropdown
        buttonTextStyle={styles.buttonText}
        buttonStyle={styles.button}
        selectedRowStyle={styles.selectedOption}
        defaultButtonText="Abrir"
        data={filteredEvents.sort((a, b) => (a.date < b.date ? -1 : 1))}
        search
        onSelect={handleNavigate}
        buttonTextAfterSelection={({ date, title }: EventItemProps) =>
          `${formatDate(date)}: ${title}`
        }
        rowTextForSelection={({ date, title }: EventItemProps) =>
          `${formatDate(date)}: ${title}`
        }
      />
    </View>
  );
};

export default connect(
  (state: any) => ({
    events: state.events.data,
  }),
  (dispatch) => {
    return {
      selectEvent: (data: EventComponentProps) =>
        dispatch({ type: SAVE_CURRENT_EVENT, payload: data }),
    };
  }
)(FavEventsList);

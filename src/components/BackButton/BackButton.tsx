import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LeftArrow } from "../../../assets";
import { BackButtonProps } from "../../interfaces/components";
import Text from "../Text";

const BackButton = ({ navigation }: BackButtonProps) => {
  // const navigation = useNavigation();
  //
  // const handlePress = navigation.goBack();

  // TODO implement this for back button
  // useFocusEffect(
  //   React.useCallback(() => {
  //     const onBackPress = () => {
  //       if (isSelectionModeEnabled()) {
  //         disableSelectionMode();
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     };
  //
  //     const subscription = BackHandler.addEventListener(
  //       "hardwareBackPress",
  //       onBackPress
  //     );
  //
  //     return () => subscription.remove();
  //   }, [isSelectionModeEnabled, disableSelectionMode])
  // );

  return (
    <TouchableOpacity onPress={navigation.goBack} style={{ height: 50 }}>
      <LeftArrow />
    </TouchableOpacity>
  );
};

export default BackButton;

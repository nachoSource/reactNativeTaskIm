import React, { PropsWithChildren, ReactElement } from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import styles from "./BaseLayout.styles";

type BaseLayoutProps = PropsWithChildren<{
  children: ReactElement | ReactElement[];
}>;

const BaseLayout = ({ children }: BaseLayoutProps): ReactElement => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      {children}
    </SafeAreaView>
  );
};

export default BaseLayout;

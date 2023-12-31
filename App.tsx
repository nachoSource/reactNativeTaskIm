import React, { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { HomeScreen, EventScreen } from "./src/screens";
import { store } from "./index";

// TODO add animations
// TODO create a native module to save information into a calendar
// TODO adjust styles to match client

// TODO opt - add push notifications
// TODO opt - move types to src/interfaces
// TODO update README

const Stack = createNativeStackNavigator();

const App = (): ReactElement => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Event" component={EventScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;

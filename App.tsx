import React, { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { HomeScreen, ParticipantsScreen } from "./src/screens";
import { store } from "./index";

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
        <Stack.Screen name="Participants" component={ParticipantsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;

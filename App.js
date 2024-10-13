import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import StartScreen from "./StartScreen";
import Categories from "./Categories";
import VersesScreen from "./VersesScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TMS" component={StartScreen} />
        <Stack.Screen name="Verses" component={Categories} />
        <Stack.Screen name="Ver" component={VersesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

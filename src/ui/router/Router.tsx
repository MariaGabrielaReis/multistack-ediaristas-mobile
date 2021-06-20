import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationTheme } from "ui/themes/app-theme";
import Index from "pages";
import FindHousekeeper from "pages";

const Stack = createStackNavigator();

const Router: React.FC = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <Stack.Navigator>
        <Stack.Screen name={"Index"} component={Index} />
        <Stack.Screen name={"FindHousekeeper"} component={FindHousekeeper} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

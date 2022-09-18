import React from "react";
import AuthorizationPage from "./pages/AuthorizationPage";
import Main_Page from "./pages/Main_Page";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";


const Stack = createStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='AuthorizationPage'
                    component={AuthorizationPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Main_Page'
                    component={Main_Page}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
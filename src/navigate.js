import React from "react";

import { FilmsScreen } from "./screen/FilmsScreen";
import { FilmDetails } from "./screen/FilmDetails";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function({route}){
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
            name="Main" 
            component={FilmsScreen} 
            options={{title: "Films"}}
            />
            <Stack.Screen
            name="FilmDetails" 
            component={FilmDetails}
            options={({ route }) => ({title: route.params.name})}
            />
        </Stack.Navigator>
    </NavigationContainer>
    )
}
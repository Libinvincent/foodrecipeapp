import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";



import {HomeScreen,RecipeDetails, SplashScreen} from "../screens"


const Stack = createStackNavigator();


export default function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen}/>
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="RecipeScreen" component={RecipeDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
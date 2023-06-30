import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FilterRecipe } from "../components";


import {HomeScreen,RecipeDetails, SplashScreen} from "../screens"

import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerScreen from "../screens/DrawerScreen";




const Stack = createStackNavigator();
const Drawer=createDrawerNavigator()


export function Drawerstack(){
    return(
        <Drawer.Navigator screenOptions={{
            headerShown:false,
            drawerPosition:"right",
            

        }}>
            <Drawer.Screen name="Home" component={HomeScreen}/>
        </Drawer.Navigator>
    )
}



export default function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen}/>
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="RecipeScreen" component={RecipeDetails}/>
                <Stack.Screen name="FilterRecipe" component={FilterRecipe}/>
                <Stack.Screen name="Drawer" component={Drawerstack}/>
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}

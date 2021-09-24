import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements';

import ConfigureGame from '../screens/ConfigureGame';
import PlayGame from '../screens/PlayGame';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function Navigations() {

    // const screenOptions = (route, color) => 
    // {
    //     let iconName         
    //     switch (route.name) 
    //     {
    //         case 'configureGame':                
    //             iconName = "player-settings"
    //             break;
    //         case 'playGame':
    //             iconName = "play"
    //             break;
    //     }
    //     return (            
    //         <Icon
    //         type="fontisto"
    //         name = {iconName} 
    //         size = {15} 
    //         color = {color}
    //         marginTop ={10}
    //         />                            
    //     )        
    // }
    //
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="configureGame"
                
            >
                <Tab.Screen
                name= "configureGame"
                component={ConfigureGame}
                options={{title:"Configurar Juego"}}
                />
                <Tab.Screen
                name= "playGame"
                component={PlayGame}
                options={{title:"Juego"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
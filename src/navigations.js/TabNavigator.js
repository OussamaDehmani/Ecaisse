import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import RequestScreen from "../screens/RequestScreen";
import DestinationScreen from "../screens/DestinationScreen";
import { colors } from "../global/styles";
import { Icon } from "react-native-elements";
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator 
   
    
    screenOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: 'gray',
        // showLabel: f,
        tabBarShowLabel:false,
        tabBarStyle: {backgroundColor: colors.primary,borderTopRightRadius:40,borderTopLeftRadius:40}
        
      }}
      
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Icon
                    type="material-community"
                    name='home'
                    color={colors.white}
                    size={30}
                  />
        ), }}
      />
      <Tab.Screen
        name="Settings"
        component={RequestScreen}
        options={{ headerShown: false,  tabBarIcon: ({ color, size }) => (
          <Icon
                    type="material-community"
                    name='briefcase'
                    color={colors.white}
                    size={30}
                  />
        ), }}
      />
      <Tab.Screen
        name="Destination"
        component={DestinationScreen}
        options={{ headerShown: false ,  tabBarIcon: ({ color, size }) => (
          <Icon
                    type="material-community"
                    name='account'
                    color={colors.white}
                    size={30}
                  />
        ),}}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;

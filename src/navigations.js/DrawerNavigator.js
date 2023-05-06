import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStack } from "./StackNavigators";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";
import { View,Image } from "react-native";
import { OriginContext } from "../contexts/contexts";

const Drawer = createDrawerNavigator();
import { useNavigation } from "@react-navigation/native";
import Login from "../screens/Auth/Login";

export default function DrawerNavigator({calback}) {
  const { origin, dispatchOrigin } = React.useContext(OriginContext);

  return (

    <Drawer.Navigator>
      
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
          drawerIcon: ({ focussed, size }) => 
            <Icon
              type="material-community"
              name="home"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />,
         

          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="logout"
        component={Login}
        options={{
          title: "Logout",
          drawerIcon: ({ focussed, size }) => 
            <Icon
              type="material-community"
              name="logout"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
              onPress={()=>{
                
              }}
            />,
          headerShown: false,
        }}
      />
      
    </Drawer.Navigator>
  );
}

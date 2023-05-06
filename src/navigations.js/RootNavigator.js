import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStack } from "./StackNavigators";

export default function RoootNavigator() {
  
  return (
    <>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </>
  );
}

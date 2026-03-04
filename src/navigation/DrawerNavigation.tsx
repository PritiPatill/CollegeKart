import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabs from "./BottomTabNavigation";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
      }}
    >
      <Drawer.Screen name="HomeTabs" component={BottomTabs} />
    </Drawer.Navigator>
  );
}

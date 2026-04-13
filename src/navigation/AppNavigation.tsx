import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../modules/login/Login";
import RegisterScreen from "../modules/registration/Registration";
import SplashScreen from "../modules/splash-screen/SplashScreen";
import BottomTabs from "./BottomTabNavigation";
import { COLORS } from "../theme/Colors";
import DrawerNavigation from "./DrawerNavigation";
import DetailScreen from "../modules/home/pages/detail-screen/DetailScreen";
import CourseFacilityDetails from "../modules/home/pages/course-facility-detail/CourseFacilityDetails";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: "Register",
            headerStyle: { backgroundColor: COLORS.primary },
            headerTintColor: COLORS.white,
          }}
        />
        <Stack.Screen
          name="CollegeDetail"
          component={DetailScreen}
          options={{
            title: "College Detail",
            headerStyle: { backgroundColor: COLORS.primary },
            headerTintColor: COLORS.white,
          }}
        />
        <Stack.Screen
          name="CourseFacilityDetail"
          component={CourseFacilityDetails}
          options={({ route }) => ({
            title: route.params.title,
            headerStyle: { backgroundColor: COLORS.primary },
            headerTintColor: COLORS.white,
          })}
          // options={{
          //   title: route.params.title,
          //   headerStyle: { backgroundColor: COLORS.primary },
          //   headerTintColor: COLORS.white,
          // }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

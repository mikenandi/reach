import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Entypo, AntDesign, EvilIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { TestScreen } from "../screens/test-screen";

const Tab = createBottomTabNavigator();

export const Main: React.FC = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarInactiveTintColor: Colors.grey,
          tabBarActiveTintColor: Colors.primary,
          headerShown: false,
          tabBarActiveBackgroundColor: Colors.white,
          tabBarInactiveBackgroundColor: Colors.white,
          tabBarStyle: {
            paddingBottom: 4,
            paddingTop: 4,
          },
          tabBarLabelStyle: {
            fontFamily: "PoppinsMedium",
            // color: Colors
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={TestScreen}
          options={{
            tabBarLabel: "Home",
            title: "",
            tabBarIcon: ({ color, size, focused }) =>
              focused ? (
                <Entypo name="home" size={size} color={color} />
              ) : (
                <AntDesign name="home" size={size} color={color} />
              ),
          }}
        />

        <Tab.Screen
          name="Maps"
          component={TestScreen}
          options={{
            tabBarLabel: "Statistics",
            title: "",
            tabBarIcon: ({ color, size, focused }) => (
              <EvilIcons name="chart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={TestScreen}
          options={{
            title: "",
            tabBarLabel: "Notifications",
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={
                  focused ? "ios-notifications" : "ios-notifications-outline"
                }
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Foundation, FontAwesome5 } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { NavIcon } from "../components";
import { Home, Notifications, Stats } from "../screens";

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
            paddingTop: 10,
            height: 60,
          },
          tabBarLabelStyle: {
            fontFamily: "PoppinsMedium",
            // color: Colors
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "",
            title: "",
            tabBarIcon: ({ color, size }) => (
              <NavIcon color={color}>
                <Foundation name="home" size={28} color={color} />
              </NavIcon>
            ),
          }}
        />

        <Tab.Screen
          name="Stats"
          component={Stats}
          options={{
            title: "",
            tabBarLabel: "",
            tabBarIcon: ({ color, size, focused }) => (
              <NavIcon color={color}>
                <FontAwesome5 name="calendar-alt" size={24} color={color} />
              </NavIcon>
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: "",
            title: "",
            tabBarIcon: ({ color, size, focused }) => (
              <NavIcon color={color}>
                <Ionicons
                  name="md-chatbubble-ellipses-outline"
                  size={size}
                  color={color}
                />
              </NavIcon>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

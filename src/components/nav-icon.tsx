import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Colors from "../constants/Colors";
import { Octicons } from "@expo/vector-icons";

interface NavIconProps {
  color: string;
  children: React.ReactNode;
}

export const NavIcon: React.FC<NavIconProps> = (props) => {
  return (
    <>
      <View style={{ ...styles.container }}>
        {props.children}
        <Octicons
          name="dot-fill"
          size={12}
          color={Colors.primary === props.color ? Colors.primary : Colors.white}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

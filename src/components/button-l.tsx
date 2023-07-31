import React from "react";
import { Button, StyleSheet, Text, useWindowDimensions } from "react-native";
import { TouchableRipple } from "react-native-paper";
import Colors from "../constants/Colors";

interface ButtonLProps {
  children: React.ReactNode;
  onPress?: () => void;
}

export const ButtonL: React.FC<ButtonLProps> = (props) => {
  const { width } = useWindowDimensions();
  const BUTTON_WIDTH = width * 0.85;
  const BUTTON_HEIGHT = 58;

  return (
    <TouchableRipple
      onPress={props.onPress}
      rippleColor="#6C63FF"
      style={{
        ...styles.container,
        width: BUTTON_WIDTH,
        height: BUTTON_HEIGHT,
      }}
      centered
    >
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.onPrimary,
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: "PoppinsMedium",
  },
});

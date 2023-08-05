import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
  useWindowDimensions,
} from "react-native";
import { TouchableRipple } from "react-native-paper";
import Colors from "../constants/Colors";

interface ButtonLProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  textColor?: any;
  buttonColor?: any;
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
        ...props.style,
        backgroundColor: props.buttonColor ?? Colors.primary,
      }}
      centered
    >
      <Text
        style={{
          ...styles.buttonText,
          color: props.textColor ?? Colors.white,
        }}
      >
        {props.children}
      </Text>
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
    // color: Colors.onPrimary,
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: "PoppinsMedium",
  },
});

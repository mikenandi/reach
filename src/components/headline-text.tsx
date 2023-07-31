import React, { ReactNode } from "react";
import { Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import Colors from "../constants/Colors";

interface HeadlineTextProps {
  children: ReactNode;
  style?: ViewStyle | TextStyle;
}

export const HeadlineText: React.FC<HeadlineTextProps> = (props) => {
  return (
    <>
      <Text style={{ ...styles.headlineText, ...props.style }}>
        {props.children}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  headlineText: {
    fontSize: 35,
    color: Colors.textprimary,
    letterSpacing: -1.5,
    lineHeight: 49,
    fontFamily: "PoppinsSemiBold",
  },
});

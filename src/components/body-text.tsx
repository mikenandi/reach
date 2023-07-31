import React, { ReactNode } from "react";
import { Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import Colors from "../constants/Colors";

interface HeadlineTextProps {
  children: ReactNode;
  style?: ViewStyle | TextStyle;
}

export const BodyText: React.FC<HeadlineTextProps> = (props) => {
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
    fontSize: 15,
    color: "#001533",
    lineHeight: 20,
    fontFamily: "PoppinsRegular",
  },
});

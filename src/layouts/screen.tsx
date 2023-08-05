import React, { ReactNode } from "react";
import {
  StatusBar,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Colors from "../constants/Colors";

interface ScreenProps {
  children?: ReactNode;
  style?: ViewStyle;
}

export const Screen: React.FC<ScreenProps> = (props) => {
  return (
    <>
      <StatusBar backgroundColor={Colors.primary} />
      <View style={{ ...styles.container, ...props.style }}>
        {props.children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 24,
  },
});

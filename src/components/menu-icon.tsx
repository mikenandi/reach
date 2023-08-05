import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";

export const MenuIcon = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={{ ...styles.line, width: 20 }} />
        <View style={{ ...styles.line, width: 20 }} />
        <View style={{ ...styles.line, width: 10 }} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 24,
    aspectRatio: 1 / 1,
    // alignItems: "center",
    justifyContent: "space-around",
  },
  line: {
    height: 2.22,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
});

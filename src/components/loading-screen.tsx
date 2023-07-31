import React from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Colors from "../constants/Colors";

export const LoadingScreen: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

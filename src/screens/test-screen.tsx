import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const TestScreen: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>This is test screen</Text>
        {/* <ButtonL>Create account</ButtonL> */}
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

import React from "react";
import { StatusBar, StyleSheet, View, ScrollView } from "react-native";
import { Screen } from "../../layouts";
import { Topbar } from "./topbar";
import Colors from "../../constants/Colors";
import { Categories } from "./categories";
import { News } from "./news";

export const Home: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.primary} />

      <View style={styles.container}>
        <ScrollView>
          <Topbar />
          <Categories />

          <News />
          <News />
          <News />
          <News />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

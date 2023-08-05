import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export const Categories = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleText}>Categories & Donation</Text>

        <View style={styles.categoriesContainer}>
          <View style={styles.categoryContainer}>
            <Image source={require("../../../assets/img/all.png")} />
            <Text style={styles.categoryLabel}>All</Text>
          </View>

          <View style={styles.categoryContainer}>
            <Image source={require("../../../assets/img/health.png")} />
            <Text style={styles.categoryLabel}>Cardiology</Text>
          </View>

          <View style={styles.categoryContainer}>
            <Image source={require("../../../assets/img/medicine.png")} />
            <Text style={styles.categoryLabel}>Medicine</Text>
          </View>

          <View style={styles.categoryContainer}>
            <Image source={require("../../../assets/img/general.png")} />
            <Text style={styles.categoryLabel}>General</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryLabel: {
    fontFamily: "PoppinsMedium",
    fontSize: 10,
    lineHeight: 13.2,
    color: "#7D8BB7",
    marginTop: 6,
  },
  titleText: {
    fontFamily: "PoppinsMedium",
    fontSize: 20,
    lineHeight: 21,
    color: "#232F55",
    marginBottom: 12,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 16,
  },
  categoryContainer: {
    width: 75,
    height: 75,
    alignItems: "center",
    justifyContent: "center",
  },
});

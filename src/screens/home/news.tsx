import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export const News = () => {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/img/news-1.jpg")}
          style={styles.img}
        />

        <View style={styles.newsTextContainer}>
          <Text style={styles.newsTitle}>Ukraine war chrisis</Text>

          <Text style={styles.newsContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            expedita reprehenderit
          </Text>

          <View style={styles.bottomContainer}>
            <Text style={styles.action}>Donate now</Text>

            <View style={styles.ratingContainer}>
              <FontAwesome5 name="star-half-alt" size={14} color="#9DEAC0" />
              <Text style={styles.ratingText}>4.8</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 16,
  },
  img: {
    width: 114,
    height: 99,
    borderRadius: 21,
  },
  newsTitle: {
    fontFamily: "PoppinsMedium",
    color: "#263257",
    fontSize: 12,
    lineHeight: 18.2,
    textAlign: "left",
  },
  newsContent: {
    fontFamily: "MontserratItalic",
    color: "#7D8BB7",
    fontSize: 12,
    textAlign: "left",
    marginTop: 6,
  },
  action: {
    fontFamily: "PoppinsSemiBold",
    color: "#263257",
    fontSize: 12,
    lineHeight: 13.2,
    textAlign: "left",
  },
  ratingContainer: {
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  ratingText: {
    fontSize: 13.25,
    fontFamily: "PoppinsMedium",
    color: "#080C2F",
    textAlign: "left",
    marginLeft: 4,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  newsTextContainer: {
    width: "65%",
    marginLeft: 16,
  },
});

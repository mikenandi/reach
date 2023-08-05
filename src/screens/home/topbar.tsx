import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ButtonL, MenuIcon } from "../../components";
import Colors from "../../constants/Colors";

export const Topbar: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.appbarNav}>
          <MenuIcon />

          <Image
            source={require("../../../assets/img/user.jpg")}
            style={styles.avatar}
          />
        </View>
        <View style={styles.greetingContainer}>
          <Text style={styles.welcomeText}>Welcome back</Text>
          <Text style={styles.actionName}>Start donating</Text>
        </View>

        <ButtonL buttonColor={Colors.white} textColor="#8A96BC">
          Donate
        </ButtonL>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingBottom: 50,
    borderBottomLeftRadius: 35.3,
    borderBottomRightRadius: 35.3,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  appbarNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  welcomeText: {
    fontFamily: "PoppinsMedium",
    fontSize: 18,
    lineHeight: 19,
    textAlign: "left",
    letterSpacing: 0.02,
    color: "#232F55",
  },
  actionName: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 38,
    lineHeight: 44.2,
    textAlign: "left",
    letterSpacing: -0.05,
    color: Colors.white,
    width: "60%",
  },
  greetingContainer: {
    marginVertical: 20,
  },
});

import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { Screen } from "../../layouts";
import Colors from "../../constants/Colors";
import {
  BodyText,
  ButtonL,
  HeadlineText,
  TextInputField,
} from "../../components";
import { Button } from "react-native-paper";
import { NavigationProp } from "@react-navigation/native";

interface SigninProps {
  navigation: NavigationProp<any>;
}

export const Signin: React.FC<SigninProps> = (props) => {
  const { width } = useWindowDimensions();

  const handleRegister = (): void => {
    props.navigation.navigate("RegisterNGO");
  };

  return (
    <>
      <Screen style={styles.container}>
        <HeadlineText style={styles.headingText}>
          Sign into your account
        </HeadlineText>

        <View style={styles.descContainer}>
          <BodyText style={styles.descText}>Are you guest?</BodyText>
          <Button mode="text" labelStyle={styles.labelText}>
            Login as guest
          </Button>
        </View>

        <View style={styles.formContainer}>
          <TextInputField label="Email" placeholder="reachworld@email.com" />

          <TextInputField label="Password" placeholder="**********" password />

          <ButtonL>sign in</ButtonL>

          <View style={styles.redirectContainer}>
            <BodyText>Don't have account?</BodyText>
            <Button
              mode="text"
              labelStyle={styles.labelText}
              onPress={handleRegister}
            >
              Register here
            </Button>
          </View>
        </View>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  buttonStyle: {
    borderRadius: 15,
  },
  descText: {
    marginTop: 20,
    marginBottom: 20,
  },
  formContainer: {
    alignItems: "center",
  },
  headingText: {
    width: "80%",
  },
  labelText: {
    fontFamily: "PoppinsMedium",
  },
  redirectContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  descContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

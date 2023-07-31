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

interface RegisterDonorProps {
  navigation: NavigationProp<any>;
}

export const RegisterDonor: React.FC<RegisterDonorProps> = (props) => {
  const { width } = useWindowDimensions();

  const handleSignin = (): void => {
    props.navigation.navigate("Signin");
  };

  const handleRegisterNGO = (): void => {
    props.navigation.navigate("RegisterNGO");
  };

  return (
    <>
      <Screen style={styles.container}>
        <HeadlineText>Create account</HeadlineText>

        <View style={styles.descContainer}>
          <BodyText style={styles.descText}>Are you NGO ?</BodyText>
          <Button
            mode="text"
            labelStyle={styles.labelText}
            onPress={handleRegisterNGO}
          >
            Register here
          </Button>
        </View>

        <View style={styles.formContainer}>
          <TextInputField
            label="Full name"
            placeholder="word vision international"
          />
          <TextInputField label="Email" placeholder="reachworld@email.com" />
          <TextInputField label="Password" placeholder="**********" password />
          <TextInputField
            label="Repeat Password"
            placeholder="**********"
            password
          />
          <ButtonL>create donor account</ButtonL>

          <View style={styles.redirectContainer}>
            <BodyText>Already have account? </BodyText>
            <Button
              mode="text"
              labelStyle={styles.labelText}
              onPress={handleSignin}
            >
              Sign in here
            </Button>
          </View>
        </View>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
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

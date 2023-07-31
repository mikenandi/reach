import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { Screen } from "../../layouts";
import { HeadlineText } from "../../components";
import { Button } from "react-native-paper";
import Colors from "../../constants/Colors";
import { NavigationProp } from "@react-navigation/native";

interface WelcomeProps {
  navigation: NavigationProp<any>;
}

export const Welcome: React.FC<WelcomeProps> = (props) => {
  const { width } = useWindowDimensions();

  const BUTTON_WIDTH = width * 0.92; // 96% percent of screen
  const BUTTON_HEIGHT = 50;

  const handleRegisterDonor = (): void => {
    props.navigation.navigate("RegisterDonor");
  };

  const handleRegisterNGO = (): void => {
    props.navigation.navigate("RegisterNGO");
  };

  return (
    <>
      <Screen style={styles.container}>
        <HeadlineText style={styles.welcomeText}>
          Welcome to REACH{" "}
        </HeadlineText>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            buttonColor={Colors.primary}
            contentStyle={{ height: BUTTON_HEIGHT, width: BUTTON_WIDTH }}
            style={styles.buttonStyle}
            labelStyle={styles.labelText}
            uppercase
            onPress={handleRegisterNGO}
          >
            Create account
          </Button>

          <Button
            mode="outlined"
            style={styles.buttonStyle}
            contentStyle={{ height: BUTTON_HEIGHT, width: BUTTON_WIDTH }}
            labelStyle={styles.labelText}
            textColor="#7D8BB7"
            onPress={handleRegisterDonor}
            uppercase
          >
            sign in
          </Button>
        </View>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    color: "#001533",
    fontSize: 30,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
  },
  buttonStyle: {
    marginBottom: 20,
    borderRadius: 10,
  },
  labelText: {
    fontFamily: "PoppinsMedium",
  },
});

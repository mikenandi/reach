import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Main } from "./main";
import { useFonts } from "expo-font";
import { LoadingScreen } from "../components";
import { RegisterDonor, RegisterNGO, Signin, Welcome } from "../screens";

const Stack = createStackNavigator();

export const Navigation = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const [fontsLoaded] = useFonts({
    PoppinsSemiBold: require("../../assets/fonts/poppins/Poppins-SemiBold.otf"),
    PoppinsRegular: require("../../assets/fonts/poppins/Poppins-Regular.otf"),
    PoppinsMedium: require("../../assets/fonts/poppins/Poppins-Medium.otf"),
    PoppinsLight: require("../../assets/fonts/poppins/Poppins-Light.otf"),
    MontserratItalic: require("../../assets/fonts/Montserrat-Italic.otf"),
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      setIsLoading(false);
    }
  }, [fontsLoaded]);

  if (isLoading) {
    return (
      <>
        <LoadingScreen />
      </>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      {false ? (
        <>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="RegisterDonor" component={RegisterDonor} />
          <Stack.Screen name="RegisterNGO" component={RegisterNGO} />
          <Stack.Screen name="Signin" component={Signin} />
        </>
      ) : (
        <Stack.Screen name="Main" component={Main} />
      )}
    </Stack.Navigator>
  );
};

import React, { useState } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { TextInput } from "react-native-paper";
import Colors from "../constants/Colors";
import { BodyText } from "./body-text";
import { FontAwesome } from "@expo/vector-icons";

interface TextInputFieldProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChangeText?: () => void;
  password?: boolean;
}

export const TextInputField: React.FC<TextInputFieldProps> = (props) => {
  const [hide, setHide] = useState(false);
  const { width } = useWindowDimensions();

  const TEXT_INPUT_WIDTH = width * 0.92;

  return (
    <>
      <View>
        <BodyText>{props.label}</BodyText>
        {!props.password ? (
          <TextInput
            mode="outlined"
            underlineColorAndroid="#E4E4E4"
            activeUnderlineColor={Colors.primary}
            style={{ ...styles.textInputStyle, width: TEXT_INPUT_WIDTH }}
            underlineColor={Colors.primary}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
            secureTextEntry={props.password ?? false}
          />
        ) : (
          <TextInput
            mode="outlined"
            underlineColorAndroid="#E4E4E4"
            activeUnderlineColor={Colors.primary}
            style={{ ...styles.textInputStyle, width: TEXT_INPUT_WIDTH }}
            underlineColor={Colors.primary}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
            secureTextEntry={!hide}
            right={
              <TextInput.Icon
                icon={() =>
                  !hide ? (
                    <FontAwesome
                      name="eye"
                      size={20}
                      color={Colors.grey}
                      onPress={() => setHide(!hide)}
                    />
                  ) : (
                    <FontAwesome
                      name="eye-slash"
                      size={20}
                      color={Colors.grey}
                      onPress={() => setHide(!hide)}
                    />
                  )
                }
              />
            }
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    // width: "90%",
    marginBottom: 16,
    backgroundColor: Colors.lightgray,
  },
});

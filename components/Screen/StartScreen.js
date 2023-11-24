import { View } from "react-native";
import React from "react";
import StartForm from "../Forms/StartForm";

export default function StartScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        padding: 8,
        justifyContent: "center",
      }}
    >
      <StartForm {...props} />
    </View>
  );
}

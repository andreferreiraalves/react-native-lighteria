import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_MEDIUM,
  LIGHTBLUE,
  WHITE,
} from "../styles/styles";

export const Botao = ({ titulo, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.botaoTexto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHTBLUE,
    padding: 20,
    borderRadius: 6,
  },
  botaoTexto: {
    //fontFamily: FONT_FAMILY_SEMI_BOLD
    fontSize: FONT_SIZE_MEDIUM,
    color: WHITE,
    textAlign: "center",
  },
});

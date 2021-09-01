import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { WHITE } from "../styles/styles";

export const Sacola = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.containerSacola}
      onPress={() => navigation.push("Checkout")}
    >
      <Image
        source={require("../../assets/images/icone-sacola.png")}
        style={styles.imagem}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerSacola: {
    backgroundColor: WHITE,
    padding: 18,
    borderRadius: 30,
  },
  imagem: {
    height: 30,
    width: 30,
  },
});

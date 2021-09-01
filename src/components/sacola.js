import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { RED, WHITE } from "../styles/styles";
import { DataContext } from "../provider";

export const Sacola = () => {
  const navigation = useNavigation();
  const { itensCheckout } = useContext(DataContext);
  return (
    <TouchableOpacity
      style={styles.containerSacola}
      onPress={() => navigation.push("Checkout")}
    >
      <Image
        source={require("../../assets/images/icone-sacola.png")}
        style={styles.imagem}
      />
      {itensCheckout.length > 0 ? (
        <View style={styles.containerQuantidade}>
          <Text style={styles.textoQuantidade}>
            {itensCheckout.reduce(
              (acumulado, atual) => acumulado + atual.quantidade
            )}
          </Text>
        </View>
      ) : null}
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
  containerQuantidade: {
    backgroundColor: RED,
    borderRadius: 100,
    marginTop: -22,
    marginLeft: 11,
  },
  textoQuantidade: {
    textAlign: "center",
    padding: 4,
    fontSize: 10,
    //fontFamily: FONT_FAMILY_SEMI_BOLD,
    color: WHITE,
  },
});

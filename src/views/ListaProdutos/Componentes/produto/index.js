import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { FONT_SIZE_SMALL, WHITE } from "../../../../styles/styles";

const Item = ({ titulo, imagem }) => {
  return (
    <View style={styles.containerItem}>
      <Image source={imagem} style={styles.imagem} resizeMode="contain" />
      <Text style={styles.texto}>{titulo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    height: 168,
    backgroundColor: WHITE,
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  imagem: {
    height: 64,
  },
  texto: {
    marginTop: 8,
    //fontFamily: 'OpenSans-SemiBold',
    fontSize: FONT_SIZE_SMALL,
    color: "#848486",
  },
});

export default Item;

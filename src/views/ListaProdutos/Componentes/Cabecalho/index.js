import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  COR_DE_FUNDO,
  FONT_SIZE_XX_LARGE,
  WHITE,
} from "../../../../styles/styles";

const Cabecalho = () => {
  return (
    <>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Lighteria</Text>
        <View style={styles.containerSacola}>
          <Image
            source={require("../../../../../assets/images/icone-sacola.png")}
            style={styles.imagem}
          />
        </View>
      </View>
      <View style={styles.containerDescription}>
        <View style={styles.separador} />
        <View style={styles.containerTexto}>
          <Text style={styles.textoDescricao}>Categorias</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titulo: {
    // fontFamily: 'OpenSans-ExtraBold',
    fontSize: FONT_SIZE_XX_LARGE,
  },
  containerTitulo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    // paddingHorizontal: 24,
  },
  imagem: {
    height: 30,
    width: 30,
  },
  containerSacola: {
    backgroundColor: WHITE,
    padding: 18,
    borderRadius: 30,
  },
  containerDescription: {
    // paddingHorizontal: 24,
  },
  separador: {
    borderWidth: 0.5,
    borderColor: "#A1A5AA",
  },
  containerTexto: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -22,
  },
  textoDescricao: {
    padding: 10,
    //padding: 34,
    backgroundColor: COR_DE_FUNDO,
    fontSize: 16,
    //fontFamily: 'OpenSans-Regular',
    color: "#A1A5AA",
  },
});

export default Cabecalho;

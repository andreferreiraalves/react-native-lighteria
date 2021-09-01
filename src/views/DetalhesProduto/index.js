import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import DescricaoItem from "./components/DescricaoItem";
import Background from "./components/background";

const DetalhesProduto = ({ route }) => {
  const { imagem, titulo, estudio, itemDesc, itemName, preco, id } =
    route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Background />
      <DescricaoItem
        imagem={imagem}
        titulo={titulo}
        estudio={estudio}
        itemDesc={itemDesc}
        itemName={itemName}
        preco={preco}
        id={id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetalhesProduto;

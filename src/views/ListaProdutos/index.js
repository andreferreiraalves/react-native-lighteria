import React from "react";
import { StyleSheet, View, FlatList, Text, SafeAreaView } from "react-native";

import Cabecalho from "./Componentes/Cabecalho";
import Item from "./Componentes/produto";
import { DATA } from "../../../assets/utils/data.js";
import { COR_DE_FUNDO } from "../../styles/styles";

const ListaProdutos = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerMeio}>
        <FlatList
          numColumns={2}
          data={DATA}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<Cabecalho />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COR_DE_FUNDO,
  },
  containerMeio: {
    marginHorizontal: 24,
  },
});

export default ListaProdutos;

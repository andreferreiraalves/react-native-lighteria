import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

import Cabecalho from "../Componentes/Cabecalho";
import {DATA} from '../../../../assets/utils/data.js';

const ListaProdutos = () => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={({ item }) => <View />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Cabecalho />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
});

export default ListaProdutos;

import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, Image } from "react-native";

import {
  WHITE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_X_LARGE,
  FONT_SIZE_SMALL,
  LIGHTERGRAY,
  LIGHTGRAY,
  FONT_SIZE_LARGE,
  BLACK,
} from "../../../../styles/styles";
import { Botao } from "../../../../components/botao";
import { formataValor } from "../../../../utils";
import { DataContext } from "../../../../provider";

const DescricaoItem = ({
  imagem,
  titulo,
  estudio,
  itemDesc,
  itemName,
  preco,
  id,
}) => {
  const navigation = useNavigation();
  const { adicionarItem } = useContext(DataContext);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemPosicao}>
        <View style={styles.item}>
          <View style={styles.headerPosicao}>
            <View>
              <Text style={styles.textSuperior}>{estudio}</Text>
              <Text style={styles.textMedio}>{itemName}</Text>
              <Text style={styles.textInferior}>{titulo}</Text>
            </View>
            <Image source={imagem} style={styles.imageItem} />
          </View>
          <View>
            <Text style={styles.textoDescricao}>{itemDesc}</Text>
          </View>
          <View style={styles.rodape}>
            <Text style={styles.moeda}>{formataValor(preco)}</Text>
            <Botao
              titulo="COMPRAR"
              onPress={() => {
                adicionarItem({
                  estudio,
                  itemName,
                  titulo,
                  id,
                  imagem,
                  preco,
                });
                // navigation.push("Checkout");
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 4,
    marginTop: -60,
  },
  itemPosicao: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    backgroundColor: WHITE,
    borderRadius: 30,
    padding: 28,
    width: "80%",
    elevation: 4,
  },
  headerPosicao: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textSuperior: {
    //fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_MEDIUM,
    marginBottom: 4,
  },
  textMedio: {
    //fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_X_LARGE,
    marginBottom: 4,
  },
  textInferior: {
    //fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_SMALL,
    color: LIGHTGRAY,
    marginBottom: 12,
  },
  imageItem: {
    width: 32,
    height: 72,
  },
  textoDescricao: {
    // fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_SMALL,
    color: LIGHTERGRAY,
  },
  rodape: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  moeda: {
    // fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_LARGE,
    marginTop: 10,
    color: BLACK,
  },
});

export default DescricaoItem;

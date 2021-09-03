import { useNavigation } from "@react-navigation/core";
import React, { useContext } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Botao } from "../../components/botao";

import { DataContext } from "../../provider";
import {
  FONT_SIZE_LARGE,
  FONT_SIZE_SMALL,
  FONT_SIZE_XX_LARGE,
  LIGHTBLUE,
} from "../../styles/styles";
import { formataValor } from "../../utils";
import { CheckoutItem } from "./checkoutItem";

export const Checkout = () => {
  const { itensCheckout } = useContext(DataContext);
  const navigation = useNavigation();

  const Titulo = ({ children }) => (
    <Text style={styles.titulo}>{children}</Text>
  );

  const Total = ({ children }) => <Text style={styles.total}>{children}</Text>;

  const valorTotal = itensCheckout.reduce(
    (acumulado, atual) => acumulado + atual.quantidade * atual.preco,
    0
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Titulo style={styles.titulo}>Checkout</Titulo>
        {itensCheckout.map((item) => (
          <CheckoutItem {...item} />
        ))}
        <Total>{formataValor(valorTotal)}</Total>
        <Botao titulo={"FINALIZAR COMPRA"}></Botao>
        <TouchableOpacity onPress={() => navigation.push("ListaProdutos")}>
          <Text style={styles.continuarText}>Continuar Comprando</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 24,
  },
  titulo: {
    // fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_XX_LARGE,
  },
  total: {
    fontSize: FONT_SIZE_LARGE,
    marginVertical: 36,
    //fontFamily: FONT_FAMILY_SEMI_BOLD,
  },
  continuarText: {
    //fontFamily: FONT_FAMILY_BOLD
    fontSize: FONT_SIZE_SMALL,
    color: LIGHTBLUE,
    marginTop: 20,
    textAlign: "center",
  },
  titulo: {
    marginBottom: 10,
  },
});

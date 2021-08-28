import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import ListaProdutos from './views/ListaProdutos/ListaProdutos'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
     <ListaProdutos /> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F0F4",
  },
});

export default Home;

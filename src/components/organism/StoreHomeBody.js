import React from "react";
import { View, StyleSheet, Text } from "react-native";
import HomeButton from "../molecules/HomeButton";
import CommonStyles from "../atoms/CommonStyles";

const StoreHomeBody = () => {
  return (
    <View style={styles.container}>
      <Text style={CommonStyles.generalTitle}>Operaciones</Text>
      <HomeButton
        buttonTitle={'Realizar pago'}
        backgroundColor={"#121660"}
        color={"#ffffff"}
        iconName={"credit-card"}
        iconColorLeft={"#ffffff"}
        iconColorRight={"#ffffff"}
        onPress={() => console.log("Realizar pago")} //TODO navigation
      ></HomeButton>
      <HomeButton
        buttonTitle={'Buscar cliente'}
        backgroundColor={"#ffd140"}
        color={"#000000"}
        iconName={"person"}
        iconColorLeft={"#000000"}
        iconColorRight={"#000000"}
        onPress={() => console.log("Buscar cliente")} //TODO navigation
      ></HomeButton>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 40,
    // backgroundColor: "#CCFFB5",
  },

});

export default StoreHomeBody;

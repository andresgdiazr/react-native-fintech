import React from "react";
import { View, StyleSheet } from "react-native";
import HomeBar from "../components/molecules/HomeBar";
import StoreHomeBody from "../components/organism/StoreHomeBody";

const StoreHome = () => {
  const homeBarHeight = "12%";

  return (
    <View style={styles.container}>
      <HomeBar height={homeBarHeight}></HomeBar>
      <StoreHomeBody></StoreHomeBody>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default StoreHome;

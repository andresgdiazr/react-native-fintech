import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

const SafeArea = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: StatusBar.currentHeight,
    // paddingHorizontal: 10,
    // paddingBottom: 10,
    // backgroundColor: '#f8f8',
  },
});

export default SafeArea;
import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

const HomeButton = ({
  backgroundColor,
  color,
  iconName,
  iconColorLeft,
  iconColorRight,
  buttonTitle,
  onPress
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor },
        {
          backgroundColor: pressed ? lightenColor(backgroundColor, 20) : backgroundColor,
        },
      ]}
    >
      <View style={styles.circularShape}>
        <Icon name={iconName} size={25} color={iconColorLeft} />
      </View>
      <Text style={[styles.buttonTitle, { color }]}>{buttonTitle}</Text>
      <Icon name="circle-plus" size={25} color={iconColorRight} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "15%",
    // width: '90%',
    // alignSelf: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 0,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 40,
  },
  circularShape: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
});


function lightenColor(hex, amount) {
  if (hex[0] === '#') {
      hex = hex.slice(1);
  }

  let num = parseInt(hex, 16);
  let r = (num >> 16) + amount;
  let g = ((num >> 8) & 0x00FF) + amount;
  let b = (num & 0x0000FF) + amount;

  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  let newHex = (r << 16) | (g << 8) | b;
  return '#' + newHex.toString(16).padStart(6, '0');
}

export default HomeButton;

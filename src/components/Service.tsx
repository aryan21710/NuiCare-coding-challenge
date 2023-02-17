import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TService } from "../types";

export const Service = ({ title, subtitle, imageUrl, level }: TService) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.level}>{level}</Text>
        <Image style={styles.icon} source={{ uri: imageUrl }} />
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    borderRadius: 16,
    height: "auto",
    marginBottom: 20,
    flexDirection: "row",
  },
  iconContainer: {
    width: "25%",
    flexDirection: "column",
    backgroundColor: "#405d27",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16
  },
  icon: {
    width: 60,
    height: 60
  },
  dataContainer: {
    width: "75%",
    backgroundColor: "#c1946a",
    height: "100%",
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20
  },
  title: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
    marginVertical: 5,
    fontFamily: "Monaco",
    borderBottomWidth: 1,
    borderColor: "white",
    borderStyle: "solid"
  },
  level: {
    fontSize: 14,
    textAlign: "center",
    color: "white",
    marginVertical: 10,
    fontFamily: "Luminari"
  },
  subtitle: {
    fontSize: 13,
    textAlign: "left",
    color: "black",
    fontFamily: "Baskerville"
  }
});


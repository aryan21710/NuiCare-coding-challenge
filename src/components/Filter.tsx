import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import React from "react";
import {TFilter} from '../types';

export const Filter = ({ query, onQuery }: TFilter) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder='Search By Title/SubTitle/Level.....'
          placeholderTextColor='white'
          onChangeText={onQuery}
          defaultValue={query}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    padding: 10,
    marginTop: 10,
    marginBottom: 0
  },
  input: {
    width: "100%",
    textAlign: "center",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#c1946a",
    color: "white",
    fontFamily: 'Impact'
  }
});


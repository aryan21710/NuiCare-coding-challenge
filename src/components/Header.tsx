import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {HeaderText} from '../utils/constants'

export const Header=()=>{
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{HeaderText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 0,
      height: 40,
      width: '100%',
      backgroundColor: '#82b74b',
      color: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      fontSize: 22,
      fontFamily: 'fantasy',
      color: 'white'
    }
})


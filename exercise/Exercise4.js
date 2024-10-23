import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, ViewComponent } from 'react-native'
import React from 'react'

const Exercise4 = () => {
  return (
    <View>
      <Text style={styles.title}>WELCOME</Text>
      <Text style={styles.title1}>Username</Text>
      <View style={styles.container}>
      <TextInput placeholder='Masukkan username anda' style={styles.input} />
      </View>
      <Text style={styles.title1}>Password</Text>
      <View  style={styles.container}>
      <TextInput placeholder='Masukkan password anda' style={styles.input} />
      </View>
      <TouchableOpacity activeOpacity={0.5} style={styles.button}>
        <Text style={styles.textButton}>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Exercise4

const styles = StyleSheet.create({
    title : {
        color : 'black',
        fontSize : 35,
        margin : 20,
        fontWeight : 'bold'
    },

    title1 : {
        color : 'black',
        fontSize : 20,
        margin : 10,
        fontWeight :'400',
    },
    
    container : {
        alignItems : 'center',

    },

    input: {
        borderWidth : 1,
        borderColor : 'black',
        padding : 10,
        borderRadius : 10,
        fontSize : 15,
        width : 360,
        height : 50,
    },
    button: {
        backgroundColor: 'orange',
        margin: 10,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
      textButton: {
        color: 'white',
        fontSize: 22,

      },
});
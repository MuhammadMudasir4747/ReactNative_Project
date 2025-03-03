import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
            <Text style={styles.btnText}>All Items</Text>
        </Pressable>
        <Pressable>
            <Text>All Items</Text>
        </Pressable>
        <Pressable>
            <Text>All Items</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        padding: "7%",
        height: "100%",
        width: "100%",
        backgroundColor: "#ffffff"
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        
    },
    buttonContainer:{
        flexDirection: "row",
        gap: 10,

    },
    button:{
        padding: "2%",
        borderRadius:5,
        borderWidth: 1,
        borderColor: "greeen",
    }
})
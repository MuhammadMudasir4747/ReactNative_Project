import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import AllItems from './AllItems';
import CreateScreen from './CreateScreen';
import LowStockScreen from './LowStockScreen';

const data = [
    { id: 1, name: "Wheat", stock: 5, unit: "kg" },
    { id: 2, name: "Rice", stock: 15, unit: "kg" },
    { id: 3, name: "flour", stock: 25, unit: "kg" },
    { id: 4, name: "Pulse", stock: 50, unit: "kg" },
    { id: 5, name: "Corn", stock: 19, unit: "kg" }
  ];

const HomeScreen = () => {
    const [view, setview] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Dashboard</Text>

      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, view ===0 ? {backgroundColor:"green"}: null]} onPress={()=>setview(0)}>
            <Text style={[styles.btnText, view ===0? {color:"white"}:null]}>All Items</Text>
        </Pressable>
        <Pressable style={[styles.button, view ===1 ? {backgroundColor:"green"}: null]} onPress={()=>setview(1)}>
            <Text style={[styles.btnText, view ===1? {color:"white"}:null]}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.button, view ===2 ? {backgroundColor:"green"}: null]} onPress={()=>setview(2)}>
            <Text style={[styles.btnText, view ===2? {color:"white"}:null]}>Create Items</Text>
        </Pressable>

      </View>
      {view === 0 && <AllItems data={data} />}
      {view === 1 && <LowStockScreen data={data}/>}
      {view === 2 && <CreateScreen/>}
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
        marginVertical:10,
        
    },
    buttonContainer:{
        flexDirection: "row",
        gap: 10,

    },
    button:{
        paddingVertical: 3.5,
        paddingHorizontal:10,
        borderRadius:50,
        borderWidth: 0.8,
        borderColor: "green",
    },
    btnText:{
        color: "green",
        fontSize: 12,
       
    }
})
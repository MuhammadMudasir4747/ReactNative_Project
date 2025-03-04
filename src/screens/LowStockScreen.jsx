import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LowStockScreen = ({data}) => {
    const LowStockItems= data.filter(item=> item.stock<20);
  return (
    <>
    <View>
        <View style={styles.headingContainer}>
               <Text style={styles.headingText}>Items</Text>
               <Text style={styles.headingText}>Quantity</Text>
             </View>
    </View>
    <FlatList data={LowStockItems}  keyExtractor={(item)=> item.id.toString()}
        renderItem={({item})=>(
            <View  style={[styles.itemContainer, {backgroundColor: item.stock<20? "#FFCCCC": "#D7F6BFFF"}]}>
                <Text style={styles.itemText} >{item.name}</Text>
                <Text style={styles.itemText} >{item.stock}-{item.unit}</Text>
            </View>
        )}
        
        />
    </>
  )
}

export default LowStockScreen

const styles = StyleSheet.create({
    headingContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 10,
      },
      headingText:{
        fontSize: 14,
        fontWeight: 500,
      },
      itemContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius:10,
        marginBottom:10,
        marginTop: 5
        
      },
      itemText:{
        fontSize: 14,
        fontWeight: 500,
        
      },
})
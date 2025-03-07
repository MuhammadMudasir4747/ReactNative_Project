import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'


const CreateScreen = () => {
    const [itemName, setitemName] = useState("")
    const [stock, setstock] = useState("")
    const [items, setItems] = useState([]);

    const handleAddItems=()=>{
      if(itemName.trim() && stock.trim()){
        setItems([...items, {id: Date.now().toString(), name: itemName, stock}])
    
        setitemName("");
        setstock("");
    }
    }


  return (
    <View>
    <View style= {styles.container}>
      <TextInput style={styles.input}
      placeholder='Enter an Item Name....'
      placeholderTextColor={"black"}
      value={itemName}
      onChangeText={(item)=> setitemName(item)}
      />

    <TextInput style={styles.input}
      placeholder='Stock Availabale?'
      placeholderTextColor={"black"}
      value={stock}
      onChangeText={(stock)=> setstock(stock)}
      />
    </View>
    <View style={styles.btnContainer}>
    <Pressable style= {styles.button} onPress={handleAddItems}>
    <Text>Add Item in the Stock</Text>

    </Pressable>
    </View>

    <View style={styles.tableContainer}>
    <View style={styles.tableHeader}>
        <Text style={styles.headerText}>Item Name</Text>
        <Text style={styles.headerText}>Stock</Text>
    </View>

    <FlatList
    data={items}
    keyExtractor={(item)=> item.id}
    renderItem={({item})=>(
      <View style={styles.tableRow}>
        <Text style={styles.rowText}>{item.name}</Text>
        <Text style={styles.rowText}>{item.stock}</Text>

      </View>
    )}
    
    
    />

    </View>

    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
    container:{
        paddingTop: "7%",
        flexDirection: "row",
        gap: 10
    },

    input:{
        borderWidth: 1,
        borderRadius:10,
        borderColor: "green",
        width: "45%"
    },
    button:{
        backgroundColor: "#CABFEEFF",
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        borderRadius: 10
        
    },
    btnContainer:{
        paddingTop: 30,
        alignItems: "center"
    },
      tableContainer: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        padding: 10
    },
    tableHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "gray"
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 16
    },
    tableRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 8
    },
    rowText: {
        fontSize: 14
    }
})
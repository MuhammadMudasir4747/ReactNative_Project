  import { FlatList, StyleSheet, Text, View } from 'react-native'


  const AllItems = ({data}) => {
    return (
      <>
      <View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Items</Text>
          <Text style={styles.headingText}>Quantity</Text>
        </View>
        
      <FlatList  data={data} keyExtractor={(item)=>item.id}
        renderItem={({item}) => (
          <View  style={[styles.itemContainer, {backgroundColor: item.stock<20? "#FFCCCC": "#D7F6BFFF"}]}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.stock}-{item.unit}</Text>
          </View>
          
        )}
        // ItemSeparatorComponent={()=> <View style={{height:10}}/>}
        />
      

      </View>
 
      </>
    )
    
  }

  export default AllItems

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
  import { FlatList, StyleSheet, Text, View } from 'react-native'


  const AllItems = ({data}) => {
    return (
      <View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Items</Text>
          <Text style={styles.headingText}>Quantity</Text>
        </View>
        
      <FlatList data={data} keyExtractor={(item)=>item.id}
        renderItem={({item}) => (
          <View  style={styles.headingContainer}>
            <Text style={styles.headingText}>{item.name}</Text>
            <Text style={styles.headingText}>{item.stock}-{item.unit}</Text>
          </View>
        )}/>
      

      </View>
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
    }
  })
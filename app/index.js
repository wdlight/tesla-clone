import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { FontAwesome,FontAwesome5, Entypo, 
          MaterialCommunityIcons, Ionicons,
          MaterialIcons, Dog, update, fan, shipWheel, } from '@expo/vector-icons';

import car from '../assets/images/car.png'
import menuOptions from '../assets/menuOptions';
import MenuOption from '../components/MenuOption'

const Controls = () => {
  return (
    <>
    <Image source={car} style={styles.image} resizeMode='contain'></Image>
    <View style={styles.controls}>
      <Entypo name="lock" size={26} color="gray"/>
      <MaterialCommunityIcons name="fan" size={26} color="gray"/>
      <FontAwesome5 name="bolt" size={26} color="gray"/>
      <Ionicons name="car-sport-sharp" size={26} color="gray"/>
    </View>
    </>
  )
}


export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My model S</Text>
          <Text style={styles.subtitle}>parked</Text>
        </View>
        
        <FontAwesome name="drivers-license-o" size={24} color="gray" />
      </View>

      

      
      <FlatList
        data={menuOptions}
        showVerticalScrollIndicator={false}
        renderItem={ MenuOption }
        ListHeaderComponent={Controls}
        >

      </FlatList>
     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    padding: 24,
    backgroundColor: '#161818',
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#eee',
    
  },
  subtitle: {   

    color: 'gray',
    fontWeight: '500',
  },

  image: {
    width: '100%',
    height: 300,
    
  },

  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});

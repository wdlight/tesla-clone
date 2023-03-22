import { StyleSheet, Text, TouchableOpacity, Alert, Pressable } from "react-native";
import { MaterialCommunityIcons, 
          MaterialIcons, } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Linking } from 'react-native';

const MenuOption = ({item}) => {

  const onPress = (href) => {
    Alert.alert( "touching..","teouched..",[{text:'OK', onPress: () => console.log('OK Pressed')}])
    Linking.openURL( href);

  }

  return (
    <Link href={item.href} asChild >
      <Pressable style={styles.optionRow}
        onPress={()=>onPress(item.href)}
        >
        {
          item.icon ? ( <item.icon />) 
          : (
          <MaterialCommunityIcons   
            name={item.iconName} 
            size={26} color="gray"/>
            )
          }

          {/* Text */}
          <Text  style={styles.optionText}>{item.name}</Text>

          {/* Icon */}
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color="gray"
            style={{ marginLeft: 'auto'}}
            />      
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
  
  optionRow: {    
    flexDirection: 'row',
    color: 'gray',
    alignItems: 'center',
    marginVertical: 10,

  },
  optionText: {    
    color: '#eee',
    marginLeft: 10,

  },
});

export default MenuOption;
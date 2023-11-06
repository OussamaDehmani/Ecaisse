import React from 'react';
import { View, StyleSheet,TouchableOpacity,Text} from 'react-native';
import Essayer from '../components/Essayer';
import { useNavigation } from "@react-navigation/native";
const Exemple = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>

  {/* <TouchableOpacity   onPress={() => {
            
            navigation.navigate("RequestScreen");
          }}>
  <Text style={styles.title}>telephone</Text>
  </TouchableOpacity>  */}
      <Essayer
        title="Iphone"
        image={require('../../assets/Iphon.png')}
        onPress={() => {
            
          navigation.navigate("HomeScreen");
        }}
      />
         <Essayer
        title="Huawei"
        image={require('../../assets/Huawei.jpeg')}
      
      />
       <Essayer
        title="Show me"
        image={require('../../assets/Showme.png')}
        
      />
       <Essayer
        title="Nokiya"
        image={require('../../assets/Nokiya.jpeg')}
        
      />
       <Essayer
        title="smasung"
        image={require('../../assets/smasung.png')}
       
      />
       <Essayer
        title="Autre"
        image={require('../../assets/Iphone.jpeg')}
        
      />
         <Essayer
        title="Ajouter"
        image={require('../../assets/Ajoute.jpeg')}
        
      />
    </View>
  );

  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:100
  },
});

export default Exemple;

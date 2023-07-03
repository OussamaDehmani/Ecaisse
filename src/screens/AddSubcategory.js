import React from 'react';
import { View, TextInput, StyleSheet,Text,   ScrollView,TouchableOpacity
 } from 'react-native';
import  ButtonClick from '../components/ButtonClick'
import { color } from "react-native-reanimated";
import { colors } from 'react-native-elements';
import * as SQLite from 'expo-sqlite';
import { useNavigation } from "@react-navigation/native";

const db = SQLite.openDatabase('mynewdb.db');

const AddSubcategory = ({ route }) => {
  const id  = route.params;
  const navigation = useNavigation();
  const [title, setTitle] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [wholesalePrice, setWholesalePrice] = React.useState('');
  const [retailPrice, setRetailPrice] = React.useState('');

  const addSubCategory = () => {
    
    db.transaction(tx => {
      tx.executeSql('INSERT INTO sub_categories1 (name,idCategory,prix_detail,prix_gros,quantity) values (?,?,?,?,?)',
       [title,id,retailPrice?retailPrice:0,wholesalePrice?wholesalePrice:0,quantity?quantity:0],
        (txObj, resultSet) => {
        
      
          console.log('inserted')
        },
        (txObj, error) => console.log('error1'.error)
      );
      navigation.navigate('subCategoy',id)
    });
  }

  return (

    <View style={styles.container}>

     <Text style={styles.title}>Ajouter sous Catégorie</Text>
    <View style={styles.containerTop}>
      <TextInput
        style={styles.input}
        placeholder="Titre"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantité"
        value={quantity}
        keyboardType="numeric"
        onChangeText={(text) => setQuantity(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Prix de gros"
        value={wholesalePrice}
        keyboardType="numeric"
        onChangeText={(text) => setWholesalePrice(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Prix de détail"
        value={retailPrice}
        keyboardType="numeric"
        onChangeText={(text) => setRetailPrice(text)}
      />
      </View>


      <TouchableOpacity
      activeOpacity={0.7}
      onPress={addSubCategory}
     >
      
      < ButtonClick title="Ajouter" />
     
    </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height:50,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  
 
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    flex:1
  },
  containerTop: {
     marginTop:100,
     paddingHorizontal:50,
     width:'100%',
     marginBottom:'10%'
  },
  title:{
  
      color:colors.black,
      fontSize:30,
      marginHorizontal:50,
      fontWeight:'bold',
      marginTop:20,
      textAlign:'center'
    
  },
  input: {
    height: 40,
    marginTop: 8,
    marginBottom: 8,
    paddingHorizontal: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    width:'100%'
  },
});

export default AddSubcategory;

import React from 'react';
import { View, TextInput, StyleSheet,Text } from 'react-native';
import  ButtonClick from '../components/ButtonClick'
import { color } from "react-native-reanimated";
import { colors } from 'react-native-elements';
const AddSubcategory = ({ title, quantity, wholesalePrice, retailPrice, onChange }) => {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Ajouter sous Catégorie</Text>
<View style={styles.containerTop}>
      <TextInput
        style={styles.input}
        placeholder="Titre"
        value={title}
        onChangeText={(text) => onChange({ ...{ title: text } })}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantité"
        value={quantity}
        keyboardType="numeric"
        onChangeText={(text) => onChange({ ...{ quantity: text } })}
      />
      <TextInput
        style={styles.input}
        placeholder="Prix de gros"
        value={wholesalePrice}
        keyboardType="numeric"
        onChangeText={(text) => onChange({ ...{ wholesalePrice: text } })}
      />
      <TextInput
        style={styles.input}
        placeholder="Prix de détail"
        value={retailPrice}
        keyboardType="numeric"
        onChangeText={(text) => onChange({ ...{ retailPrice: text } })}
      />
</View>
             <ButtonClick title="Enregistrer" />
    </View>
  );
};

const styles = StyleSheet.create({
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
     marginBottom:40
  },
  title:{
  
      color:colors.primary,
      fontSize:20,
      marginHorizontal:50,
      fontWeight:'bold',
      marginTop:20
    
  },
  input: {
    height: 40,
    marginTop: 8,
    marginBottom: 8,
    paddingHorizontal: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default AddSubcategory;

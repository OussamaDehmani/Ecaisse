import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import {useState} from 'react';
import ButtonClick from '../components/ButtonClick'
const ContentComponent = () => {
  const [enteredTitle, setenteredTitle] = useState('');
  const Validation =  () => {
    console.log('APP');
    navigate("HomeScreen");
    
  };
 
  return (
    <View style={styles.container}>
       <View style={styles.searchSection}>
              <TextInput
                style={styles.input}
                placeholder="Enter Title Catégorie"
                underlineColorAndroid="transparent"
                value={enteredTitle}
                onChangeText={text => setenteredTitle(text)}
              />

              
            </View>
      
      

 <ButtonClick   title="Envoyer" />
         
     
    </View>
  );

  
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    flex:1
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
  },
  searchSection: {
    width: '90%',
    height: 71,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    color:'black',
    fontWeight: 'bold',
    color: '#424242',
    fontSize: 17,
    marginLeft:20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal:4,

  },
  
});

export default ContentComponent;

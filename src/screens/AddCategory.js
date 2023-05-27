import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { useState, useEffect } from 'react';
import { colors, parameters } from "../global/styles";

import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';
import ButtonClick from '../components/ButtonClick'
const ContentComponent = () => {
  const [enteredTitle, setenteredTitle] = useState('');
  const Validation =  () => {
    console.log('APP');
    navigate("HomeScreen");
    
  };
  const [db, setDb] = useState(SQLite.openDatabase('mynewdb.db'));
  const [isLoading, setIsLoading] = useState(true);
  const [names, setNames] = useState([]);
  const [currentName, setCurrentName] = useState(undefined);

  const addName = () => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO categories (name) values (?)', [enteredTitle],
        (txObj, resultSet) => {
          let existingNames = [...names];
          existingNames.push({ id: resultSet.insertId, name: enteredTitle});
          setNames(existingNames);
          setCurrentName(undefined);
          console.log('inserted')
        },
        (txObj, error) => console.log('error1'.error)
      );
      db.transaction(tx => {
        tx.executeSql('SELECT * FROM categories', null,
          (txObj, resultSet) => setNames(resultSet.rows._array),
          (txObj, error) => console.log('error2'.error)
        );
      });
    });
  }


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
      
      

            <TouchableOpacity
      activeOpacity={0.7}
      onPress={addName}
      style={[styles.button,{backgroundColor: colors.blue}]}>
      <Text style={styles.titleButton}>Ajouter</Text>
    </TouchableOpacity>         
     
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
  button: {
    width: '20%',
    height:50,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  Infoicon: {
    marginRight: 20,
  },
  titleButton: {
    fontSize: 20,
    color: colors.white,
    fontWeight: '700',
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

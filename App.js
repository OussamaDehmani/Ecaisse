import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// import HomeScreen from './src/screens/HomeScreen';
import SubCategory from './src/screens/SubCategory';
import RequestScreen from './src/screens/RequestScreen';
import DestinationScreen from './src/screens/DestinationScreen';
import AddCategory from './src/screens/AddCategory'
import DetailsCategory from './src/screens/DetailsCategory'
import AddSubcategory from './src/screens/AddSubcategory'
import Exemple from './src/screens/Exemple'
import StorageVendor from './src/screens/StorageVendor'
import HomeScreen from './src/screens/HomeScreen';
import Stockage from './src/screens/Stockage';
import StockageExiste from './src/screens/StockageExiste';
import * as SQLite from 'expo-sqlite';
import { useState, useEffect } from 'react';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';

const Home = createStackNavigator();

export default function App() {
  const [db, setDb] = useState(SQLite.openDatabase('mynewdb.db'));
  const [isLoading, setIsLoading] = useState(true);
  const [names, setNames] = useState([]);
  const [currentName, setCurrentName] = useState(undefined);
  useEffect(() => {
   
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM sqlite_master WHERE type = 'table'", [], 
      (tx,results) => {
        console.log(`get result ${results}`);
      });
    });
 
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)')
    });

     
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS sub_categories1 (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT,idCategory INTEGER,prix_detail INTEGER,prix_gros INTEGER,quantity INTEGER)')
    });
    
  
    }, []);

  return (
    <NavigationContainer>
      <Home.Navigator>
      
      <Home.Screen 
                name ="StockageExiste"
                component = {StockageExiste}
                options ={{headerShown:false}}
    />

    
          <Home.Screen 
                name ="Stockage"
                component = {Stockage}
                options ={{headerShown:false}}
    />

      <Home.Screen 
                name ="StorageVendor"
                component = {StorageVendor}
                options ={{headerShown:false}}
    />
           
            <Home.Screen 
                name ="HomeScreen"
                component = {HomeScreen}
                options ={{headerShown:false}}
    />
    
             <Home.Screen 
                name ="DestinationScreen"
                component = {DestinationScreen}
                options ={{headerShown:true}}
            /> 
        
          
              <Home.Screen 
                name ="subCategoy"
                component = {SubCategory}
                options ={{headerShown:true}}
            /> 
               <Home.Screen 
                name ="AddCategory"
                component = {AddCategory}
                options ={{headerShown:true}}
            /> 
            
            
            <Home.Screen 
                name ="DetailsCategory"
                component = {DetailsCategory}
                options ={{headerShown:true}}
            /> 
            <Home.Screen 
                name ="AddSubcategory"
                component = {AddSubcategory}
                options ={{headerShown:true}}
            /> 

        </Home.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
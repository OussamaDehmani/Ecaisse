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
import StorageVendor from './src/screens/StorageVendor'
import HomeScreen from './src/screens/HomeScreen';
const Home = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Home.Navigator>
            
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
                name ="RequestScreen"
                component = {RequestScreen}
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

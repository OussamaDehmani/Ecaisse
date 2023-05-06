import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SubCategory from '../screens/SubCategory';
import RequestScreen from '../screens/RequestScreen';
import DestinationScreen from '../screens/DestinationScreen';
import DetailScreen from '../screens/DetailScreen';
import TabNavigator from './TabNavigator';
import Changeinfo from '../screens/Changeinfo';
// import Mention from '../screens/Mention';
// import Lastjobs from '../screens/Lastjobs';
import AddCategory from '../screens/AddCategory'
import DetailsCategory from '../screens/DetailsCategory'
import AddSubcategory from '../screens/AddSubcategory'
import Exemple from '../screens/Exemple'
import StorageVendor from '../screens/StorageVendor'
const Home = createNativeStackNavigator();

export function HomeStack(){
    return(
        <Home.Navigator>
            
            <Home.Screen 
                name ="HomeScreen"
                component = {TabNavigator}
                options ={{headerShown:false}}
    />
    
            <Home.Screen 
                name ="StorageVendor"
                component = {StorageVendor}
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
                name ="DetailScreen"
                component = {DetailScreen}
                options ={{headerShown:false}}
            /> 
             <Home.Screen 
                name ="Changeinfo"
                component = {Changeinfo}
                options ={{headerShown:true,headerTitle:''}}
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
    )
}
import React from 'react';
import { View, StyleSheet,TouchableOpacity,Text} from 'react-native';
import ButtonClick from '../components/ButtonClick';
import { useNavigation } from "@react-navigation/native";
const Exemple = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      
                           <View style={styles.buttomclick}>
                           <View style={styles.buttomheader}>
                             <ButtonClick  nameicon="office-building-outline" typeicon="MaterialCommunityIcons" title="Client" />
                           </View>
                           <View style={styles.buttomheader}>
                             <ButtonClick  nameicon="close" typeicon="material-community" title="Fournisseur" />
                           </View>
                           <View style={styles.buttomheader}>
                             <ButtonClick  nameicon="close" typeicon="material-community" title="Statistiques" />
                           </View>
                           <View style={styles.buttomheader}>
                             <ButtonClick  nameicon="close" typeicon="material-community" title="crédits" />
                           </View>
                           <View style={styles.buttomheader}>
                             <ButtonClick  nameicon="close" typeicon="material-community" title="stocks" />
                           </View>
                           <View style={styles.buttomheader}>
                             <ButtonClick  nameicon="close" typeicon="material-community" title="export db" />
                           </View>
                           <View style={styles.buttomheader}>
                             <ButtonClick  nameicon="close" typeicon="material-community" title="import db" />
                           </View>
                            
                             
                                
                            </View>
    </View>
  );

  
};

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    padding:15
  },
  buttomclick:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  buttomheader:{
    width:'13%',
    
  }
});

export default Exemple;

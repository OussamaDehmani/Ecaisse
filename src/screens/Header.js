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
    width:'28%'
  }
});

export default Exemple;

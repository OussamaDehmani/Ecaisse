import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
// import colors from '../../assets/colors';
import { Icon } from "react-native-elements";
import { colors, parameters } from "../global/styles";

const CradStatistiqueAchat = props => {
 
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={props.disable}
      onPress={props.function}
      style={[styles.button,{backgroundColor: props.disable == true ? 'grey' : colors.white}]}>

        <Text style={styles.mois}>{props.mois}</Text>
     
      <Text style={styles.annee}>{props.annee}</Text>
    </TouchableOpacity>
  );
};

export default CradStatistiqueAchat;

const styles = StyleSheet.create({
  button: {

        width: '30%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'white',
        paddingVertical: 10,
        textAlign:'center',
        borderRadius:30,
        flexDirection:'row',
        paddingHorizontal:20,
        margin:10
        

        
    
  },
 

  mois:{

    fontSize: 20,
    color: colors.black,
    fontWeight: '700',
  },

  annee: {
    fontSize: 20,
    color: colors.black,
    fontWeight: '700',
  },

 
});

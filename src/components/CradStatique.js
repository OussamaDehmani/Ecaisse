import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
// import colors from '../../assets/colors';
import { Icon } from "react-native-elements";
import { colors, parameters } from "../global/styles";

const CradStatique = props => {
 
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={props.disable}
      onPress={props.function}
      style={[styles.button,{backgroundColor: props.disable == true ? 'grey' : colors.white}]}>

<Text style={styles.nombrecategorie}>{props.nombrecategorie}</Text>
       { props.nameicon &&
      <Icon  
        name={props.nameicon}
        type={props.typeicon}
        style={styles.Infoicon}
        size={28}
      />
    }
      <Text style={styles.souscategorie}>{props.souscategorie}</Text>
    </TouchableOpacity>
  );
};

export default CradStatique;

const styles = StyleSheet.create({
  button: {

        width: '18%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        paddingVertical: 30,
        textAlign:'center',
        marginLeft:15,
        position:'relative'
        
    
  },
  Infoicon: {
    marginBottom:20,
    color: colors.black,
  },

  nombrecategorie:{

    fontSize: 20,
    color: colors.black,
    fontWeight: '700',
    marginBottom:20
  },

  souscategorie: {
    fontSize: 20,
    color: colors.black,
    fontWeight: '700',
    marginTop:5
  },

 
});

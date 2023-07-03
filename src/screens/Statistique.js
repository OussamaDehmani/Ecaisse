import React from 'react';
import { Text,StyleSheet,View } from 'react-native';
import CradStatique from '../components/CradStatique';
import CradStatistiqueAchat from '../components/CradStatistiqueAchat';
const Statistique = () => {
  return (

    <View style={styles.container}>

<View style={styles.containerTop}>
<CradStatique nombrecategorie="1" nameicon="office-building-outline" typeicon="MaterialCommunityIcons" souscategorie="Samsung"/>
<CradStatique nombrecategorie="2"  nameicon="office-building-outline" typeicon="MaterialCommunityIcons" souscategorie="Iphone"/>
<CradStatique nombrecategorie="3"  nameicon="office-building-outline" typeicon="MaterialCommunityIcons" souscategorie="accessoire"/>
<CradStatique nombrecategorie="4"  nameicon="office-building-outline" typeicon="MaterialCommunityIcons" souscategorie="Autre"/>
</View>
      
<View style={styles.containerTop}>

<CradStatistiqueAchat mois="4" annee="2023"/>

<CradStatistiqueAchat mois="5" annee="2023"/>

<CradStatistiqueAchat mois="6" annee="2023"/>
</View>



      

    </View>

  );
};


const styles = StyleSheet.create({
  container: {
  
     flex:1,
     marginTop:30
     
  },

  containerTop:{

     flexDirection:'row',
     flexWrap:'wrap'
  }

})
export default Statistique;

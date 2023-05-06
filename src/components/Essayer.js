import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, parameters } from "../global/styles";
const Essayer = ({ title, image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
   
    width:'40%',
    margin:5,
    marginHorizontal:16,
    alignItems: 'center',
    justifyContent:'center',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor:'white'
  },
  container: {
    
  
    padding: 6,
    
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
});

export default Essayer;

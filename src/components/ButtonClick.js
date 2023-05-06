import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
// import colors from '../../assets/colors';
// import {Icon} from '@rneui/themed';
import { colors, parameters } from "../global/styles";

const ButtonClick = props => {
 
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={props.disable}
      onPress={props.function}
      style={[styles.button,{backgroundColor: props.disable == true ? 'grey' : colors.blue}]}>
      {/* <Icon
        name={props.name}
        type="ionicon"
        style={styles.Infoicon}
        size={28}
        // color={colors.white}
      /> */}
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonClick;

const styles = StyleSheet.create({
  button: {
    width: '100%',
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
  title: {
    fontSize: 20,
    color: colors.white,
    fontWeight: '700',
  },
});

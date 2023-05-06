import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import { colors, parameters } from "../global/styles";
// import {Icon} from '@rneui/themed';

const CustomTextInput = props => {
  const [eye, setEye] = useState(true);

  return (
    <View style={styles.searchSection}>
      <TextInput
        style={styles.input}
        placeholder={props.textInputplaceholder}
        underlineColorAndroid="transparent"
        secureTextEntry={eye}
        // value={old_password}
        value={props.textInputValue}
        onChangeText={props.textInputSetValue}
      />
      {/* eye-outline */}
      <TouchableOpacity
        activeOpacity={0.2}
        onPress={() => {
          setEye(!eye);
        }}>
        {/* <Icon
          size={24}
          color={colors.metalgry}
          type="ionicon"
          name={eye ? 'ios-eye' : 'ios-eye-off'}
        /> */}
      </TouchableOpacity>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: colors.black,
    fontWeight: 'bold',
    color: '#424242',
    fontSize: 17,
  },
  searchSection: {
    width: '90%',
    height: 71,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});

import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors, parameters } from "../global/styles";
import { Icon } from "react-native-elements";

const Essayer = ({ id, title, image, onPress }) => {
  const deleteName = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM names WHERE id = ?",
        [id],
        (txObj, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            let existingNames = [...names].filter((name) => name.id !== id);
          }
        }
        // (txObj, error) => console.log(error)
      );
    });
  };
  return (
    <View onPress={onPress} style={styles.touchable}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <Icon
            type="material-community"
            name="delete-circle"
            color={colors.primary}
            style={styles.image2}
            size={35}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress}>
          <Image source={image} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    width: "20%",
    margin: 5,
    marginHorizontal: 16,
    alignItems: "center",
    // justifyContent:'center',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "white",
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
    fontWeight: "bold",
    color: colors.primary,
  },
});

export default Essayer;

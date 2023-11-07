import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import * as SQLite from "expo-sqlite";
import { useState, useEffect } from "react";
import { colors, parameters } from "../global/styles";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import * as DocumentPicker from "expo-document-picker";
import { Icon } from "react-native-elements";
import ButtonClick from "../components/ButtonClick";
const ContentComponent = () => {
  const [enteredTitle, setenteredTitle] = useState("");
  const Validation = () => {
    // console.log('APP');
    navigate("HomeScreen");
  };
  const [db, setDb] = useState(SQLite.openDatabase("mynewdb.db"));
  const [isLoading, setIsLoading] = useState(true);
  const [names, setNames] = useState([]);
  const [currentName, setCurrentName] = useState(undefined);
  const [image, setImage] = useState(null);
  const checkForCameraRollPermission = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert(
        "Please grant camera roll permissions inside your system's settings"
      );
    } else {
      console.log("Media Permissions are granted");
    }
  };

  const PHOTOS_FOLDER = `${FileSystem.documentDirectory}images`;

  const initializeFolder = async () => {
    try {
      const folderInfo = await FileSystem.getInfoAsync(PHOTOS_FOLDER);
      // if (!folderInfo.exists) {
      //   await FileSystem.makeDirectoryAsync(PHOTOS_FOLDER);
      //   console.log(FileSystem.makeDirectoryAsync(PHOTOS_FOLDER))
      // }
    } catch (error) {
      console.error("Error initializing folder:", error);
    }
  };

  // TODO: save the newUri to some storage so you know where to look later when you actually want to do the upload

  useEffect(() => {
    checkForCameraRollPermission();
  }, []);

  const pickImageAsync = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (_image) {
      setImage(_image.uri);
      await initializeFolder();

      const key = "imagexxx"; // any unique identifier will work
      const newUri = `${PHOTOS_FOLDER}/${key}.jpg`;
      // setImage(newUri);

      await FileSystem.copyAsync({ from: _image.uri, to: newUri });
    } else {
      Alert.alert("You did not select any image.");
    }
  };

  const addName = () => {
    // console.log(image);
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO categories (name,uri) values (?)",
        [enteredTitle, image],
        (txObj, resultSet) => {
          let existingNames = [...names];
          existingNames.push({
            id: resultSet.insertId,
            name: enteredTitle,
            uri: image,
          });
          setNames(existingNames);
          setCurrentName(undefined);
          console.log("inserted");
        }
        // (txObj, error) => console.log("error1".error)
      );
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM categories",
          null,
          (txObj, resultSet) => setNames(resultSet.rows._array)
          // (txObj, error) => console.log("error2".error)
        );
      });
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder="Enter Title Catégorie"
          underlineColorAndroid="transparent"
          value={enteredTitle}
          onChangeText={(text) => setenteredTitle(text)}
        />

        {!image && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={pickImageAsync}
            style={[styles.button, { backgroundColor: colors.blue }]}
          >
            <Icon
              type="material-community"
              name="image"
              color={colors.white}
              size={35}
            />
          </TouchableOpacity>
        )}

        {image && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={pickImageAsync}
            style={[styles.button, { backgroundColor: colors.blue }]}
          >
            <Image
              source={{ uri: image }}
              style={{
                borderRadius: 15,
                borderColor: colors.primary,
                borderWidth: 1,
                width: 200,
                height: 200,
                alignSelf: "center",
              }}
            />
          </TouchableOpacity>
        )}
      </View>

      <View></View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={addName}
        style={[styles.button, { backgroundColor: colors.blue }]}
      >
        <Text style={styles.titleButton}>Ajouter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    flex: 1,
    paddingTop: 80,
    paddingBottom: 80,
  },
  button: {
    width: "20%",
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",
    marginRight: "auto",
    marginLeft: "auto",
  },
  Infoicon: {
    marginRight: 20,
  },
  titleButton: {
    fontSize: 20,
    color: colors.white,
    fontWeight: "700",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
  },
  searchSection: {
    width: "90%",
    height: 71,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    color: "black",
    fontWeight: "bold",
    color: "#424242",
    fontSize: 17,
    marginLeft: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 4,
  },
});

export default ContentComponent;

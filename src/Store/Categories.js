import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Platform,
} from "react-native";
import * as SQLite from "expo-sqlite";
import { useState, useEffect } from "react";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import * as DocumentPicker from "expo-document-picker";

import React from "react";

export default function Categories() {
  const exportDb = async () => {
    if (Platform.OS === "android") {
      const permissions =
        await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
      if (permissions.granted) {
        const base64 = await FileSystem.readAsStringAsync(
          FileSystem.documentDirectory + "SQLite/mynewdb.db",
          {
            encoding: FileSystem.EncodingType.Base64,
          }
        );

        await FileSystem.StorageAccessFramework.createFileAsync(
          permissions.directoryUri,
          "mynewdb.db",
          "application/octet-stream"
        )
          .then(async (uri) => {
            await FileSystem.writeAsStringAsync(uri, base64, {
              encoding: FileSystem.EncodingType.Base64,
            });
          })
          .catch((e) => e);
      } else {
        console.log("Permission not granted");
      }
    } else {
      await Sharing.shareAsync(
        FileSystem.documentDirectory + "SQLite/mynewdb.db"
      );
    }
  };

  const importDb = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: true,
    });

    if (result.type === "success") {
      setIsLoading(true);

      if (
        !(
          await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite")
        ).exists
      ) {
        await FileSystem.makeDirectoryAsync(
          FileSystem.documentDirectory + "SQLite"
        );
      }

      const base64 = await FileSystem.readAsStringAsync(result.uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      await FileSystem.writeAsStringAsync(
        FileSystem.documentDirectory + "SQLite/mynewdb.db",
        base64,
        { encoding: FileSystem.EncodingType.Base64 }
      );
      await db.closeAsync();
      setDb(SQLite.openDatabase("mynewdb.db"));
    }
  };

  useEffect(() => {
    // db.transaction(tx => {
    //   tx.executeSql('CREATE TABLE IF NOT EXISTS names (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)')
    // });
    // db.transaction(tx => {
    //   tx.executeSql('SELECT * FROM names', null,
    //     (txObj, resultSet) => setNames(resultSet.rows._array),
    //     (txObj, error) => console.log(error)
    //   );
    // });
    // setIsLoading(false);
  }, [db]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading names...</Text>
      </View>
    );
  }

  const addName = (enteredTitle) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO categories (name) values (?)",
        [enteredTitle],
        (txObj, resultSet) => {
          let existingNames = [...names];
          existingNames.push({ id: resultSet.insertId, name: enteredTitle });
          setNames(existingNames);
          setCurrentName(undefined);
          console.log("inserted");
        }
        // (txObj, error) => console.log(error)
      );
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM categories",
          null
          // (txObj, resultSet) => console.log(resultSet.rows._array),
          // (txObj, error) => console.log(error)
        );
      });
    });
  };

  const deleteName = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM names WHERE id = ?",
        [id],
        (txObj, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            let existingNames = [...names].filter((name) => name.id !== id);
            setNames(existingNames);
          }
        }
        // (txObj, error) => console.log(error)
      );
    });
  };
  const getTables = (id) => {
    console.log(`intred`);
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM sqlite_master WHERE type = 'table'",
        [],
        (tx, results) => {
          // console.log(`get result ${results}`);
        }
      );
    });
    console.log(`out`);
  };

  const updateName = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE names SET name = ? WHERE id = ?",
        [currentName, id],
        (txObj, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            let existingNames = [...names];
            const indexToUpdate = existingNames.findIndex(
              (name) => name.id === id
            );
            existingNames[indexToUpdate].name = currentName;
            setNames(existingNames);
            setCurrentName(undefined);
          }
        }
        // (txObj, error) => console.log(error)
      );
    });
  };

  const showNames = () => {
    return names.map((name, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text>{name.name}</Text>
          <Button title="Delete" onPress={() => deleteName(name.id)} />
          <Button title="Update" onPress={() => updateName(name.id)} />
        </View>
      );
    });
  };
  return {
    showNames,
    addName,
    deleteName,
    updateName,
    exportDb,
    importDb,
  };
}

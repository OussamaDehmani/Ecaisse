import React from "react";
import { StyleSheet, Text, View,Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { colors } from "../global/styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

//added
import RNPickerSelect from "react-native-picker-select";

/* START edit info*/

import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

/* END edit info*/

export default function Changeinfo() {

    const navigation = useNavigation();

    return (
        <LinearGradient
            style={styles.container}
            colors={[colors.bg, colors.bg]}
        >
            <Text style={{ fontSize: 30, paddingBottom: 5, fontWeight: "700" }}>
                Changer mon profile
            </Text>
            <StatusBar style="auto" />
            <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={require("../../assets/profile-pic.jpg")}
              style={styles.image}
              resizeMode="center"
            ></Image>
          </View>
         
        </View>

        <View style={{ alignSelf: "center",
    alignItems: "center"}}>
          <Text
            style={[
              styles.text,
              { fontWeight: "bold", fontSize: 20, color: colors.black },
            ]}
          >
            Benjdia Saad
          </Text>
          <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 ,paddingBottom:10,alignContent:"center"}]}>
            benjdiasaad@gmail.com
          </Text>
        </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Tapez votre Nom complet"
                    placeholderTextColor="gray"
                    onChangeText={(femail) => setFemail(femail)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Tapez ******"
                    placeholderTextColor="gray"
                    onChangeText={(femail) => setFemail(femail)}
                />
            </View>

            <View style={styles.inputView}>
                <RNPickerSelect
                                    style={styles.TextInput}

                    onValueChange={(value) => console.log(value)}
                    placeholder={{ label: "Language", value: null }}
                    items={[
                        { label: "JavaScript", value: "JavaScript" },
                        { label: "TypeScript", value: "TypeScript" },
                        { label: "Python", value: "Python" },
                        { label: "Java", value: "Java" },
                        { label: "C++", value: "C++" },
                        { label: "C", value: "C" },
                    ]}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Tapez ******"
                    placeholderTextColor="gray"
                    onChangeText={(femail) => setFemail(femail)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Tapez ******"
                    placeholderTextColor="gray"
                    onChangeText={(femail) => setFemail(femail)}
                />
            </View>

            <View style={{ flexDirection: "row", paddingTop: 10 }}>
                <TouchableOpacity
                    style={[
                        styles.editBtn,
                        {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                        },
                    ]}>
                    <Text
                        style={{
                            color: colors.bg,
                            fontWeight: "bold",
                        }}
                    >
                        Modifier
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden",
      },
    inputView: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 10,
        width: "80%",
        height: 45,
        marginBottom: 10,
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined,
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 0,
    },

    editBtn: {
        width: "50%",
        borderRadius: 25,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1E3A8A",
        // backgroundColor: colors.primary,
    },
    
});
import React, { useState, useRef, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
import { Icon } from "react-native-elements";
import { colors, parameters } from "../global/styles";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_HEIGHT, WINDOW_WIDTH } from "@gorhom/bottom-sheet";
import { ScreenHeight, ScreenWidth } from "react-native-elements/dist/helpers";
import DetailsCategory from "../screens/DetailsCategory";
import Essayer from "../components/Essayer";
import * as SQLite from "expo-sqlite";

const SubCategory = ({ route }) => {
  const id = route.params;
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const _map = useRef(1);
  const [latlng, setLatLng] = useState({});
  const [subcategories, setSubcategories] = useState([]);
  const db = SQLite.openDatabase("mynewdb.db");
  useEffect(() => {
    //get all subcategories from db
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM sub_categories1 WHERE idCategory = ?",
        [id],
        (txObj, resultSet) => setSubcategories(resultSet.rows._array)
        // (txObj, error) => console.log(error)
      );
    });
  }, [id]);

  return (
    // <View>
    <View style={styles.container} colors={[colors.bg, colors.bg]}>
      {}
      <ScrollView bounces={false}>
        <View>
          <View style={styles.cardbutto}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RequestScreen");
              }}
            >
              <View style={{ ...styles.card, backgroundColor: colors.primary }}>
                <View style={{ ...styles.view2 }}>
                  <Icon
                    type="material-community"
                    name="car-back"
                    color={colors.white}
                    style={styles.image2}
                    size={35}
                  />
                </View>
                <View>
                  <Text style={{ ...styles.title, color: colors.white }}>
                    Iphone
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderColor: colors.primary,
              border: 2,
              borderWidth: 1,
              marginBottom: 20,
              marginHorizontal: 10,
            }}
          ></View>

          <View style={styles.cardbuttom}>
            {subcategories.map((el) => (
              <TouchableOpacity
                style={styles.touchableCard}
                key={el.id}
                onPress={() => {
                  navigation.navigate("subCategoy", el.id);
                }}
              >
                <View style={styles.containerCard}>
                  <Icon
                    type="material-community"
                    name="delete-circle"
                    color={colors.primary}
                    style={styles.imageCard}
                    size={35}
                  />
                  <Image
                    source={require("../../assets/Iphon.png")}
                    style={styles.imageCard}
                  />
                  <Text style={styles.titleCard}>{el.name}</Text>
                </View>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={styles.touchableCard}
              onPress={() => {
                navigation.navigate("AddSubcategory", id);
              }}
            >
              <View style={styles.containerCard}>
                <Image
                  source={require("../../assets/Ajoute.jpeg")}
                  style={styles.imageCard}
                />
                <Text style={styles.titleCard}>Ajouter</Text>
              </View>
            </TouchableOpacity>

            {/*  end new card */}
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              // border: 1,
              // borderWidth: 1,
              margin: 8,
              paddingTop: 6,
            }}
          >
            {/* {latlng != {} ? (
              <MapView
                ref={_map}
                region={{
                  latitude:  	46.829853,
                  longitude:  -71.254028,
                  latitudeDelta: 0.015*3,
                  longitudeDelta: 0.0121*3,
                 
                }}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                customMapStyle={mapStyle}
                showsUserLocation={true}
                followsUserLocation={true}
              // initialRegion = {{latitude:latlng.latitude,longitude:latlng,latitudeDelta:0.008,longitudeDelta:0.008}}
              >
                {rideData.map((item, index) => (
                  <Marker
                    coordinate={item}
                    key={index.toString()}
                    style={styles.carsAround}
                  />
                ))}
              </MapView>
            ) : (
              <></>
            )} */}
          </View>
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#2058c0" translucent={true} />
    </View>
    // </View>
  );
};
const styles = StyleSheet.create({
  touchableCard: {
    width: "20%",
    margin: 5,
    marginHorizontal: 16,
    alignItems: "center",
    // justifyContent:'center',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "white",
  },
  containerCard: {
    padding: 6,
  },
  imageCard: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  titleCard: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
  },
  sections2: {
    backgroundColor: colors.black,
  },
  container: {
    flex: 1,
    marginTop: "10%",
    backgroundColor: colors.grey10,
    // paddingBottom: 30,
    // paddingTop: parameters.statusBarHeight,
  },
  header: {
    backgroundColor: colors.bg,
    height: parameters.headerHeight,
    alignItems: "flex-start",
  },

  image1: {
    height: 100,
    width: 100,
  },

  image2: {
    // borderRadius: 30,
    margin: 0,
    // backgroundColor: "white",
    // border:1,
    // borderWidth:1,
    // width:70,
    // height:60
  },
  image2cars: { height: ScreenWidth, width: ScreenHeight, borderRadius: 0 },

  home: {
    backgroundColor: colors.grey10,
    // paddingLeft: 20,
  },

  text1: {
    color: colors.white,
    fontSize: 28,
    paddingBottom: 20,
    paddingTop: 20,
  },

  text2: {
    paddingHorizontal: 10,
    color: colors.bg,
    fontSize: 16,

    fontWeight: "500",
    paddingTop: 6,
    width: (WINDOW_WIDTH - 40) / 2,
  },

  view1: {
    flexDirection: "column",
    flex: 1,
    paddingTop: 24,
    backgroundColor: "#005594",
    borderRadius: 15,
    borderColor: colors.primary,
    borderWidth: 1,
  },

  button1: {
    height: 40,
    width: 150,
    backgroundColor: "#005594",
    borderRadius: 20,
    border: 1,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 20,
    bottom: 1,
    marginLeft: 10,
    marginBottom: 5,
  },

  button1Text: {
    color: colors.white,
    fontSize: 17,
    marginTop: -2,
  },
  card: {
    border: 1,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 20,
    width: 80,
    height: 70,
    backgroundColor: colors.bg,
    alignItems: "center",
    margin: SCREEN_WIDTH / 22,
  },

  view2: {
    marginBottom: 5,
    borderRadius: 15,
    // backgroundColor: colors.primary,
    // padding: 5,
    // border: 1,
    // borderWidth: 1,
    // borderColor: colors.grey2,title
  },

  view2cars: {
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: colors.grey6,
  },
  cars: {
    // alignItems: "center",
    // backgroundColor: colors.primary,
    // ImageBackground:require('../'),
    // margin: SCREEN_WIDTH / 22,
    height: Dimensions.get("window").width / 2.6,
    width: Dimensions.get("window").width * 0.9 - 20,
    marginHorizontal: 10,
    borderRadius: 12,
    marginBottom: 10,
  },

  title: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "500",
  },
  titlecars: {
    color: colors.black,
    fontSize: 16,
  },
  view3: {
    flexDirection: "row",
    marginTop: 5,
    height: 50,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
    border: 1,
    borderColor: colors.blue,
    borderRadius: 20,
  },
  text3: { marginLeft: 15, fontSize: 20, color: colors.bg },

  view4: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    backgroundColor: colors.bg,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
  },

  view5: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 5,
    justifyContent: "space-between",
    marginHorizontal: 15,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 30,
    flex: 1,
  },

  view6: {
    alignItems: "center",

    margin: 10,
  },
  view7: {
    backgroundColor: colors.white,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },

  map: {
    height: 150,
    marginVertical: 0,
    width: SCREEN_WIDTH * 0.9,
    border: 1,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 30,
  },

  text4: {
    fontSize: 20,
    color: colors.primary1,
    fontWeight: "500",
    marginLeft: 20,
    marginBottom: 10,
  },
  textcherche: {
    fontSize: 20,
    // paddingTop:10,
    color: "black",
    fontWeight: "500",
    marginLeft: 20,
    marginBottom: 10,
  },
  Tlastoffre: {
    fontSize: 20,
    paddingTop: 10,
    color: "black",
    fontWeight: "300",
    marginLeft: 20,
    // marginBottom:10 ,
  },

  icon1: { marginLeft: 10, marginTop: 5 },

  view8: {
    flex: 1,
    marginTop: -25,
    padding: 0,
    flexDirection: "row",
    margin: 0,
  },
  carsAround: {
    width: 5,
    height: 5,
  },

  location: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
  },

  view9: { width: 4, height: 4, borderRadius: 2, backgroundColor: "white" },
  //////////////////////////////

  cardbuttom: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardbutto: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
export default SubCategory;

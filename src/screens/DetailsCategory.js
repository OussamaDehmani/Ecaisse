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
  Alert, Modal, Pressable
} from "react-native";
const SCREEN_WIDTH = Dimensions.get("window").width;
import { Icon } from "react-native-elements";
import { colors, parameters } from "../global/styles";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_HEIGHT, WINDOW_WIDTH } from "@gorhom/bottom-sheet";
import { ScreenHeight, ScreenWidth } from "react-native-elements/dist/helpers";
import { color } from "react-native-reanimated";
import { SearchBar } from 'react-native-elements';
import Essayer from '../components/Essayer';
import * as SQLite from 'expo-sqlite';

const DetailsCategory = ({ data }) => {
  const [db, setDb] = useState(SQLite.openDatabase('mynewdb.db'));

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const _map = useRef(1);
  const [latlng, setLatLng] = useState({});
  const [searchText, setSearchText] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisiblee, setModalVisiblee] = useState(false);
  const [categories, setCategories] = useState([]);
  const [result, setResult] = useState([]);

  const search = async () => {
    // search in table categories based on name
    console.log(searchText)
    if (searchText != '') {
      db.transaction(tx => {
        tx.executeSql('SELECT * FROM categories WHERE name LIKE ?', ['%' + searchText + '%'],
          (txObj, resultSet) => {
            if (resultSet.rows.length > 0) {
              setCategories(resultSet.rows._array);
            } else {
              getAllCategory()
            }
          },
          (txObj, error) => console.log(error)
        );
      }
      );

    }


  }
  const handleSearch = async (text) => {
    setSearchText(text);
    await search();

  };

  const deleteCategory = (id) => {
    // db.transaction(tx => {
    //   tx.executeSql('DELETE FROM categories WHERE id = ?', [id],
    //     (txObj, resultSet) => {
    //       if (resultSet.rowsAffected > 0) {

    //       }
    //     },
    //     (txObj, error) => console.log(error)
    //   );
    // });

    // db.transaction(tx => {
    //   tx.executeSql('SELECT * FROM categories', null,
    //     (txObj, resultSet) => setCategories(resultSet.rows._array),
    //     (txObj, error) => console.log('error3'.error)
    //   );
    // });

  };
  const getAllCategory = async () => {
    db.transaction(async tx => {
      await tx.executeSql('SELECT * FROM categories', null,
        (txObj, resultSet) => setCategories(resultSet.rows._array),
        (txObj, error) => console.log('error3'.error)
      );
    });

  }

  useEffect(() => {

    getAllCategory()

  }, []);
  return (
    // <View>
    <View style={styles.container} colors={[colors.bg, colors.bg]}>
      { }
      <ScrollView bounces={false}>
        <View>
          <View style={{ width: '100%', marginBottom: 20, flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center' }}>
            <View style={{ width: '70%' }}>
              <SearchBar
                containerStyle={{ backgroundColor: 'white', borderColor: colors.black, borderWidth: 2, borderRadius: 20 }}
                inputContainerStyle={{ backgroundColor: 'white' }}
                inputStyle={{ color: 'black', fontSize: 16 }}
                placeholder="Rechercher..."
                onChangeText={handleSearch}
                value={searchText}
              />
            </View>

            <TouchableOpacity onPress={() => setModalVisible(true)} style={{ width: '20%', marginTop: 20 }}>
              <Icon
                type="material-community"
                name="barcode-scan"
                color={colors.primary}
                style={styles.image2}
                size={35}
              />
            </TouchableOpacity>
          </View>
          <View style={{ borderColor: colors.primary, border: 2, borderWidth: 1, marginBottom: 20, marginHorizontal: 10 }}></View>

          <View style={styles.cardbuttom}>
          <View style={styles.touchable}>

    <TouchableOpacity 
      onPress={() => setModalVisiblee(true)}
    >
      <Text style={styles.title}>...</Text>
    
    </TouchableOpacity>

    <TouchableOpacity  
    onPress={() => {

      console.log("click card")
    }} 
    >
      <Image
        source={require('../../assets/smasung.png')}
        style={styles.image} />
      <Text style={styles.title}>Samsung</Text>
    </TouchableOpacity>

    </View>



          { categories.map(el=>(
          <View style={styles.touchable}>
          <TouchableOpacity key={el.id} 
          onPress={() => setModalVisiblee(true)}
          >
          <Text style={styles.title}>...</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => {
          navigation.navigate("subCategoy",el.id);
          }} 
          >
          <Image source={{ uri: el.uri }} style={styles.image} />
          <Text style={styles.title}>{el.name}</Text>
          </TouchableOpacity>
          </View>
          ))}
       
       {/* />
       
        <Essayer
         title="Nokia"
         image={require('../../assets/Nokiya.jpeg')}
         
<<<<<<< HEAD
       />  */}

            <View style={styles.touchable}>

                <TouchableOpacity 
                  onPress={() => setModalVisiblee(true)}
                >
                   <Text style={styles.title}>...</Text>
                 
=======
       /> */}

            <View style={styles.touchable}>

              <View style={styles.container}>
                <TouchableOpacity 
                  onPress={() => {

                    console.log("click icon")
                  }} 
                >
                  <Icon
                    type="material-community"
                    name="copyright"
                    color={colors.primary}
                    style={styles.image2}
                    size={35}
                  />
>>>>>>> 660e18ef790014199a180152e68fa4c846f3958a
                </TouchableOpacity>

                <TouchableOpacity  
                 onPress={() => {

                  console.log("click card")
                }} 
                >
                  <Image
                    source={require('../../assets/smasung.png')}
                    style={styles.image} />
<<<<<<< HEAD
                  <Text style={styles.title}>Samsung</Text>
                </TouchableOpacity>
         
            </View>



           

      


            <View style={styles.touchable}>

            <TouchableOpacity 
                 
                >
                   <Text style={styles.title}></Text>
                 
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {

                    navigation.navigate("AddCategory");
                  }}
                >
                  <Image
                    source={require('../../assets/Ajoute.jpeg')}
                    style={styles.image} />
                  <Text style={styles.title}>Ajouter</Text>
                </TouchableOpacity>
              
            </View>

=======
                  <Text style={styles.title}>Samsung cion</Text>
                </TouchableOpacity>
              </View>
            </View>



            <View style={styles.touchable}>

              <View style={styles.container}>
                <TouchableOpacity  >
                  <Icon
                    type="material-community"
                    name="copyright"
                    color={colors.primary}
                    style={styles.image2}
                    size={35}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {

                    navigation.navigate("AddCategory");
                  }}
                >
                  <Image
                    source={require('../../assets/smasung.png')}
                    style={styles.image} />
                  <Text style={styles.title}>Samsung</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* <Essayer
         title="Autre"
         image={require('../../assets/Iphone.jpeg')}
         
       /> */}


            <View style={styles.touchable}>

              <View style={styles.container}>
                <TouchableOpacity  >
                  <Icon
                    type="material-community"
                    name="copyright"
                    color={colors.primary}
                    style={styles.image2}
                    size={35}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {

                    navigation.navigate("AddCategory");
                  }}
                >
                  <Image
                    source={require('../../assets/Ajoute.jpeg')}
                    style={styles.image} />
                  <Text style={styles.title}>Samsung</Text>
                </TouchableOpacity>
              </View>
            </View>

>>>>>>> 660e18ef790014199a180152e68fa4c846f3958a
            

            {/*  end new card */}

          </View>
<<<<<<< HEAD
          </View>
=======
>>>>>>> 660e18ef790014199a180152e68fa4c846f3958a


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

          </View>
        {/* </View> */}
      </ScrollView>
      <StatusBar style="light" backgroundColor="#2058c0" translucent={true} />

      <Modal

        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Icon
                type="material-community"
                name="close"
                color={colors.primary}
                style={styles.image2}
                size={35}
              />
            </Pressable>
          </View>
        </View>
      </Modal>

<<<<<<< HEAD
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisiblee}
        onRequestClose={() => setModalVisiblee(false)}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setModalVisiblee(false)}>
              <Text style={styles.closeButton}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} 
            onPress={() =>   navigation.navigate("AddCategory")}
            >
              <Text style={styles.modalItemText}>Modification</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem}  onPress={() =>   navigation.navigate("RequestScreen")}>
              <Text style={styles.modalItemText}>Suppression</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

=======
>>>>>>> 660e18ef790014199a180152e68fa4c846f3958a
    </View>
    // </View>
  );
};
const styles = StyleSheet.create({
<<<<<<< HEAD
  
=======
  touchable: {

    width: '20%',
    margin: 5,
    marginHorizontal: 16,
    alignItems: 'center',
    // justifyContent:'center',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
  },
>>>>>>> 660e18ef790014199a180152e68fa4c846f3958a
  containerCard: {


    padding: 6,

  },
  image: {
    width: 50,
    height: 64,
    borderRadius: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },

  sections2: {
    backgroundColor: colors.black,
  },
<<<<<<< HEAD

=======
  container: {
    flex: 1,
    marginTop: '10%',
    backgroundColor: colors.grey10,
    // paddingBottom: 30,
    // paddingTop: parameters.statusBarHeight,
  },
>>>>>>> 660e18ef790014199a180152e68fa4c846f3958a
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
    marginBottom:10
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
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-between'

  },
  cardbutto: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'center',

  },
  centeredView: {
    flex: 1,
    backgroundColor: 'white'
  },
  buttonClose: {
    marginTop: 20
  },

  touchable: {

    width: '20%',
<<<<<<< HEAD
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent:'center',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingVertical:10
  
  },
  
=======
    margin: 5,
    marginHorizontal: 16,
    alignItems: 'center',
    // justifyContent:'center',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  container: {


    padding: 6,

  },
>>>>>>> 660e18ef790014199a180152e68fa4c846f3958a
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
<<<<<<< HEAD
    marginLeft:10,

=======
>>>>>>> 660e18ef790014199a180152e68fa4c846f3958a
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
<<<<<<< HEAD
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
<<<<<<< HEAD
<<<<<<< HEAD
    padding: 10,
=======
    padding: 20,
>>>>>>> 195bb70 (Add screen modification)
=======
    padding: 10,
>>>>>>> 935b94b (ADD style card)
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '30%',
    alignItems: 'center',
  },
  closeButton: {
    color: '#007AFF',
<<<<<<< HEAD
<<<<<<< HEAD
    marginBottom:6,
=======
    marginBottom:20,
>>>>>>> 195bb70 (Add screen modification)
=======
    marginBottom:6,
>>>>>>> 935b94b (ADD style card)
    fontSize:20
    
  },
  modalTitle: {
<<<<<<< HEAD
<<<<<<< HEAD
    fontSize: 18,
    color: '#007AFF',
=======
    fontSize: 24,
>>>>>>> 195bb70 (Add screen modification)
=======
    fontSize: 18,
    color: '#007AFF',
>>>>>>> 935b94b (ADD style card)
    fontWeight: 'bold',
    marginVertical: 20,
  },
  modalItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
  modalItemText: {
    fontSize: 18,
    color: '#007AFF',
  },
=======
>>>>>>> 660e18ef790014199a180152e68fa4c846f3958a




});
export default DetailsCategory;


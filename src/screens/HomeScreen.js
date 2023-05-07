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
import Essayer from '../components/Essayer';
  import * as SQLite from 'expo-sqlite'
  
  // import {createTableCategory,createCategory} from '../Store/Categories';



  const HomeScreen = () => {
    const db = SQLite.openDatabase('test.db');

    const navigation = useNavigation();
    const [data, setData] = useState([]);

    const createTable=async()=>{
      // await db.transaction(tx => {
      //   tx.executeSql(
      //     'CREATE TABLE IF NOT EXISTS category (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, logo TEXT, type TEXT);'
      //   );
      //   console.log(db)
      //   console.log('table created');

      // });
      db.transaction(tx => {
        tx.executeSql(
          'PRAGMA table_info();',
          [],
          (_, result) => {
            const tableNames = [];
            for (let i = 0; i < result.rows.length; i++) {
              const tableName = result.rows.item(i).name;
              tableNames.push(tableName);
              setData(tableNames)
            }
            console.log(`Tables in the database: ${tableNames.join(', ')}`);
          },
          (_, error) => {
            console.log('PRAGMA table_info failed', error);
            return true;
          }
        );
      });
      console.log(data)
      // await db.transaction(tx => {
      //   tx.executeSql(
      //     'INSERT INTO category (id,name, logo, type) VALUES (?,?,?,?);',
      //     [1,'name','logo','t'],
      //     (_, result) => {
      //       console.log('Insertion successful');
      //     },
      //     (_, error) => {
      //       console.log('Insertion failed', error);
      //       return true;
      //     }
      //   );
      // }, error => {
      //   console.log('Transaction failed', error);
      // }, () => {
      //   console.log('Transaction completed');
      // });

      // await db.transaction(tx => {
      //   tx.executeSql(
      //     'SELECT * FROM category',
      //     [],
      //     (_, result) => {
      //       console.log(result.rows.raw()); // this will log all the rows in the category table
      //     },
      //     (_, error) => {
      //       console.log('Select failed', error);
      //       return true;
      //     }
      //   );
      // });
    }
  
    // CRUD operations on the category table

    // create a new category
    const addCategory = () => {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO category (id,name, logo, type) VALUES (?,?,?,?);',
          [1,'name','logo','t'],
          (_, result) => {
            console.log('Insertion successful');
          },
          (_, error) => {
            console.log('Insertion failed', error);
            return true;
          }
        );
      }, error => {
        console.log('Transaction failed', error);
      }, () => {
        console.log('Transaction completed');
      });

      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM category',
          [],
          (_, result) => {
            console.log(result.rows.raw()); // this will log all the rows in the category table
          },
          (_, error) => {
            console.log('Select failed', error);
            return true;
          }
        );
      });
    };
    
    // read all categories
    const getCategories = () => {
      return new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM category;',
            [],
            (_, { rows }) => {
              setData(rows._array)
              resolve(rows._array);
            },
            (_, error) => {
              reject(error);
            }
          );
        });
      });
    };
    

    

    useEffect( () => {
      createTable();
      addCategory();
      
    }, [db])
    


  return (
    // <View>
    <View style={styles.container} colors={[colors.bg, colors.bg]}>
      { }
      {/* <ScrollView bounces={false}> */}
        
<View>
<View>
  {data.map(el=><>{el.name}</>)}
  <Text>hh</Text>
        </View>
        <View>

        <View style={styles.cardbutto}>
             {/*  start new card */}
             <TouchableOpacity
            style={{ marginTop: 5 }}
            onPress={() => {
            
              navigation.navigate("DetailsCategory");
            }}
          >
           <View style={styles.card}>
                <View
                  style={{ ...styles.view2, paddingTop: 2 }}
                >
                  <Icon
                    type="material-community"
                    name="car-back"
                    color={colors.primary}
                    style={styles.image2}
                    size={35}
                  />
                </View>
                <View>
                  <Text style={styles.title}>telephone</Text>
                </View>
              </View>
          </TouchableOpacity>
             {/*  start new card */}
             <TouchableOpacity
            style={{ marginTop: 5 }}
            onPress={() => {
            
              navigation.navigate("RequestScreen");
            }}
          >
           <View style={{...styles.card, backgroundColor:colors.primary}}>
                <View
                  style={{ ...styles.view2, paddingTop: 2 }}
                >
                  <Icon
                    type="material-community"
                    name="car-back"
                    color={colors.white}
                    style={styles.image2}
                    size={35}
                  />
                </View>
                <View>
                  <Text style={{...styles.title,color:colors.white}}>accessoire</Text>
                </View>
              </View>
          </TouchableOpacity>
          
           </View>
           <View style={{borderColor:colors.primary, border:2,borderWidth:1,marginBottom:20,marginHorizontal:10 }}></View>

         <View style={styles.cardbuttom}> 
          
         <Essayer
        title="Iphone"
        image={require('../../assets/Iphon.png')}
        onPress={() => {
            
          navigation.navigate("subCategoy");
        }}
      />
         <Essayer
        title="Huawei"
        image={require('../../assets/huawaei1.jpeg')}
      
      />
       <Essayer
        title="Show me"
        image={require('../../assets/Showme.png')}
        
      />
       <Essayer
        title="Nokiya"
        image={require('../../assets/nokia1.jpeg')}
        
      />
       <Essayer
        title="smasung"
        image={require('../../assets/sumsung2.png')}
       
      />
       <Essayer
        title="Autre"
        image={require('../../assets/Iphone.jpeg')}
        
      />  
      <Essayer
        title="Autre"
        image={require('../../assets/Iphone.jpeg')}
        
      />
         <Essayer
        title="Ajouter"
        image={require('../../assets/Ajoute.jpeg')}
        onPress={() => {
            
          navigation.navigate("AddCategory");
        }}
        
      />


           </View>


          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              margin: 8,
              paddingTop: 6,
            }}
          >
           
          </View>
        </View>

       
</View>
      {/* </ScrollView> */}
      <StatusBar style="light" backgroundColor="#2058c0" translucent={true} />
    </View>
    // </View>
  );
};
const styles = StyleSheet.create({
  sections2: {
    backgroundColor: colors.black,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 60 : 0,
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
    // borderColor: colors.grey2,
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

 cardbuttom:{
   flexDirection:'row',
   flexWrap:"wrap",
   justifyContent:'space-between'

 },
 cardbutto:{
  flexDirection:'row',
  flexWrap:"wrap",
  justifyContent:'center',
  
}


});
export default HomeScreen;

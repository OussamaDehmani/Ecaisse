import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { colors } from "../global/styles";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function DestinationScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}></View>


        <View style={styles.infoContainer}>
          <Text
            style={[
              styles.text,
              { fontWeight: "bold", fontSize: 36, color: colors.black },
            ]}
          >
            Iphone 13 pro
          </Text>
         
        </View>

        {/* <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
            <Text style={[styles.text, styles.subText]}>Posts</Text>
          </View>
          <View
            style={[
              styles.statsBox,
              {
                borderColor: "#DFD8C8",
                borderLeftWidth: 1,
                borderRightWidth: 1,
              },
            ]}
          >
            <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
            <Text style={[styles.text, styles.subText]}>Followers</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
            <Text style={[styles.text, styles.subText]}>Following</Text>
          </View>
        </View> */}

        <View style={styles.view5}>
          <View style={styles.view6}>
            <View style={styles.view7}>
              <Icon
                type="material-community"
                name="briefcase"
                color={colors.primary}
                backgroundColor={colors.white}
                size={22}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
               
              }}
            >
              <View>
                <Text style={{ fontSize: 18, color: colors.primary }}>
                  Quantité : 12
                </Text>
              </View>
            </TouchableOpacity>
          </View>
         
        </View> 
        <View style={styles.view5}>
          <View style={styles.view6}>
            <View style={styles.view7}>
              <Icon
                type="material-community"
                name="currency-usd"
                color={colors.primary}
                backgroundColor={colors.white}
                size={22}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
               
              }}
            >
              <View>
                <Text style={{ fontSize: 18, color: colors.primary }}>
                  Prix gros : 5
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        
        </View>
        <View style={styles.view5}>
          <View style={styles.view6}>
            <View style={styles.view7}>
              <Icon
                type="material-community"
                name="currency-usd"
                color={colors.primary}
                backgroundColor={colors.white}
                size={22}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
               
              }}
            >
              <View>
                <Text style={{ fontSize: 18, color: colors.primary }}>
                  Prix détail : 12
                </Text>
              </View>
            </TouchableOpacity>
          </View>
         
        </View>
        <View style={styles.view5}>
          <View style={styles.view6}>
            <View style={styles.view7}>
              <Icon
                type="material-community"
                name="qrcode"
                color={colors.primary}
                backgroundColor={colors.white}
                size={22}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
               
              }}
            >
              <View>
                <Text style={{ fontSize: 18, color: colors.primary }}>
                  Code IME : 123596478255585
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        
        </View>
      
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  view5: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 10,
    justifyContent: "space-between",
    marginHorizontal: 15,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 30,
    flex: 1,
  },

  view6: {
    alignItems: "center",
    flex: 5,
    flexDirection: "row",
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

  view10: {
    alignItems: "center",
    flex: 5,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 5,
    marginLeft: 15,
  },
  view11: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    marginTop: 15,
  },

  view12: {
    alignItems: "center",
    flex: 5,
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginLeft: 15,
  },

  view13: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    marginTop: 15,
  },

  view14: {
    alignItems: "center",
    flex: 5,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginLeft: 15,
  },

  view15: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    marginTop: 15,
  },

  text9: { fontSize: 17, marginTop: 10 },

  text: {
    color: "#52575D",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 45,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
});

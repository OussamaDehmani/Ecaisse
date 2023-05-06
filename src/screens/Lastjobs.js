
import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../global/styles';

const Lastjobs = () => {
  var myjobs = [];
  for(let i = 0; i <10; i++){
    myjobs.push(
  <TouchableOpacity key={i}
        style={{ marginBottom: 10 }}
        onPress={() => {
          dispatchdest(
            33.971588,
            -6.849813,
            "mojamaa el khair 352",
            "hamid"
          );
          navigation.navigate("RequestScreen");
        }}
      >
        <View style={styles.view5} elevation={5} >
          <View style={styles.view6}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: colors.black,
                  marginBottom: 5,
                }}
              >
                32 Olivia Rd
              </Text>
              <Text style={{ color: colors.grey2, fontWeight: "500" }}>
                Boksburg Klipfontein 83Ir, Boksburg Klipfontein 83Ir,
                Boksburg Klipfontein 83Ir, Boksburg Klipfontein 83Ir,
                Boksburg
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "flex-start",
                paddingTop: 10,
              }}
            >
              <Icon
                type="material-community"
                name="currency-usd"
                color={colors.primary}
                size={15}
                style={{
                  border: 1,
                  borderWidth: 2,
                  borderColor: colors.primary,
                  borderRadius: 50,
                }}
              />
              <Text style={{ paddingHorizontal: 5 }}>25$ par heure</Text>
              <Icon
                type="material-community"
                name="briefcase-variant-outline"
                color={colors.primary}
                size={15}
                style={{
                  border: 1,
                  borderWidth: 2,
                  borderColor: colors.primary,
                  borderRadius: 50,
                }}
              />
              <Text style={{ paddingHorizontal: 5 }}>permanent</Text>
              <Icon
                type="material-community"
                name="clock-time-eight-outline"
                color={colors.primary}
                size={19}
              />
              <Text style={{ paddingHorizontal: 5 }}>8 heures</Text>
            </View>
          </View>
        </View>
    </TouchableOpacity>)}
  return (

         <ScrollView style={styles.container}>
    <View>
      <Text style={styles.body}>
      </Text>
    </View>
    {myjobs}
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
            paddingTop: Platform.OS === "ios" ? 20 : 80,

    flex: 1,
    padding: 10,
    paddingTop:0,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    // marginVertical: 20,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  view5: {
    // marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 5,
    justifyContent: "space-between",
    marginHorizontal: 0,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 15,
    flex: 1,
    shadowOpacity: 0.2, shadowRadius: 2, shadowOffset: { height: 1, width: 1 }
  },
});
export default Lastjobs;

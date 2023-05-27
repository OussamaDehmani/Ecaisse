
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { colors, parameters } from "../global/styles";
import { Icon } from "react-native-elements";
import ButtonClick from '../components/ButtonClick'
 import DetailsCategory from './DetailsCategory';

const StockageExiste = () => {
    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <View style={styles.body} >
        <View style={styles.left} >
                    
               
                    <DetailsCategory />

                </View> 

                <View style={styles.right} >
                 
                    <View style={styles.cardstcok} >
                    <Icon
                            type="material-community"
                            name="shopping"
                            color={colors.white}
                            style={styles.image2}
                            size={25}
                        />
                        <Text style={styles.cardstcokText} >Commande </Text>
                        
                    </View>
                    {/* ///container */}
                    <ScrollView>
                    

                        <View style={styles.rightContainer}>

                            <View style={styles.rightContainercard}>

                                <Text style={styles.rightContainercardText} >Produit </Text>
                                <Text style={styles.rightContainercardText} >Prix </Text>
                            </View>
                            <View style={styles.rightContainercard}>

                                <Text style={styles.rightContainercardText} >Smasung A02 </Text>
                                <Text style={styles.rightContainercardText} >800 </Text>
                            </View>
                        </View>


                        <View style={styles.buttom}>
                            <View style={styles.buttomclick}>

                                <ButtonClick title="Tatal" />
                            </View>
                            <View style={styles.buttomclick}>

                            <ButtonClick title="Espace" />
                            </View>

                          

                        </View>

                    </ScrollView>

                </View>



            </View>
            <StatusBar style="light" backgroundColor="#2058c0" translucent={true} />
        </View>
    );
};

const styles = StyleSheet.create({

    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        flexWrap:'wrap'
      },
    left: {
        width: '60%',
        marginHorizontal: 5

    },
    right: {
        borderColor:colors.primary,
        borderWidth:2,
        flex:1,
        width:'30%'
    },
    type: {
        marginVertical: 20,
        marginHorizontal: 10,

    },
    typeText: {
        color: 'black',
        fontSize: 20,
        paddingVertical: 10,
        marginLeft: 20
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginHorizontal: 10
    },
    infocard: {
        flexDirection: 'row',
        width: '30%'
    },
    infocardText: {
        fontSize: 20,
        color: 'black'
    },
    BarCode: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 5
    },
    BarCodeCard: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    display: {
        borderColor: 'black',
        border: 2,
        borderWidth: 2,
        height: '10%',
        position: 'relative'

    },
    clickIconDisplay: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    IconDisplay: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
   
    cardstcok: {

        backgroundColor: colors.blue,
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start'


    },
    rightTop: {
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row'


    },
    rightTopright: {
        width: '45%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 5,
        marginBottom: 5
    },
    cardstcokText: {
        fontSize: 25,
        
    },

    rightCenter: {
        justifyContent: 'space-around',
        alignContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    rightCenterright: {

        width: '43%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        overlayColor: colors.primary,
        borderWidth: 2,
        margin:4

    },
    rightCenteText: {
        fontSize: 12
    },
    rightContainer: {
        height:500,
        marginTop: 12
    },
    rightContainercard: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    rightContainercardText: {
        
        fontSize: 15,
        fontWeight: 'bold'
    },

    buttom: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    buttomclick:{
        width:'46%',
        marginHorizontal:4
    }


    // right:{
    //     width:'35%',
    //     backgroundColor:'green'
    // }

});
export default StockageExiste;

import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {
    MenuContext,
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import { Icon } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons';


export default class App extends Component {
    render() {
        return (
            <MenuContext style={styles.container}>
                <View>
                    <Menu>
                        <MenuTrigger customStyles={{ triggerWrapper: { flexDirection: 'row' } }}>
                            <Ionicons name="ellipsis-vertical" size={24} color="black" />
                        </MenuTrigger>


                        <MenuOptions style={styles.MenuPopin}>
                            <MenuOption onSelect={() => alert(`Save`)} text="Modifer" />
                            <MenuOption onSelect={() => alert(`Save`)} text="Supprimer" />


                        </MenuOptions>
                    </Menu>
                </View>
            </MenuContext>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        backgroundColor: '#ecf0f1',
    },

    MenuPopin: {
        padding: 10,
        marginLeft: 10
    }
});

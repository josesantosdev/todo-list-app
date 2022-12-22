import React from "react";
import { View, Text, StyleSheet} from 'react-native'

const Task = (props) => {

    return (
        <View style= { styles.item }>
            <View style={ styles.itemLeft }>
                <View style={ styles.square }></View>
                <Text styles={ styles.itemText }>{ props.text }</Text>
            </View>
            <View style={ styles.circular }></View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemLeft: {
        backgroundColor: '#FFF',
        padding: 15,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    square: {
        width: 24,
        height: 24,
        backgroundColor: 'black',
        opacity: -.4,
        borderRadius: 5,
        marginLeft: 15,

    },

    itemText: {
        maxWidth: '80%',

    },
    
    item: {
       
        
    },

    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    }

})

export default Task



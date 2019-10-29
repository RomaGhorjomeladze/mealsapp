import React from 'react';
import {Text, StyleSheet} from 'react-native';

const DefaultText = props => {
  return <Text>{props.children}</Text>;
};
const styles = StyleSheet.create({
    text: {
        fontWeight: 'normal',
        fontFamily: 'OpenSans-Italic',
       
    }
})

export default DefaultText
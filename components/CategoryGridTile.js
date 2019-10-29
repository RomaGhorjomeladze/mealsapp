import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const CategoryGridTile = props => {
  return (
    <TouchableOpacity
      style={styles.greedItem}
      onPress={props.onSelect}>
      <View style = {[{backgroundColor: props.color}, styles.titleContainer]}>
        <Text style = {styles.textGeneral}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  greedItem: {
    flex: 1,
    margin: 15,
    height: 150,
    alignItems: 'center',
  },
  titleContainer: {
      width: '100%',
      alignItems: 'center',
      height: '100%',
      justifyContent: 'center',
      borderRadius: 10,
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 10,
      elevation: 8,
      padding: 15
  },
  textGeneral: {
      color: 'white',
      fontFamily: 'OpenSans-Bold',
      fontSize: 20,
      letterSpacing: 1.3,
      textAlign: 'center',

  }
});

export default CategoryGridTile
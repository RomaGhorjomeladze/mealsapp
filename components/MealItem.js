import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import DefaultText from './DefaultText'

const MealItem = props => {

  return (
    <View style={[styles.mealItem, {backgroundColor: props.textColor}]}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
              <Text style={styles.titleText}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetails}}>
            <DefaultText style={styles.bottomTexts}>{props.duration}m</DefaultText>
            <DefaultText style={styles.bottomTexts}>{props.complexity}</DefaultText>
            <DefaultText style={styles.bottomTexts}>{props.affordability}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mealRow: {
    flexDirection: 'row',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  mealItem: {
    height: 200,
    width: '100%',
    marginTop: 30,
    borderRadius: 5,
    overflow: 'hidden'
  },
  mealHeader: {
    height: '90%',
    borderRadius: 10
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  bottomTexts: {
    color: 'white',
    fontWeight: 'bold',
  },
  titleText: {
    color: '#fff',
    fontFamily: 'OpenSans-Italic',
    backgroundColor: 'rgba(0,0,0,0.6)',
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 10

  },
});
export default MealItem;

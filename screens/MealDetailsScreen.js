import React, {useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useSelector, useDispatch} from 'react-redux';

import CustomHeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import {toggleFavorite} from '../store/actions/meals';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailsScreen = props => {

  const availableMeals = useSelector(state => state.meals.meals);
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = availableMeals.find(meal => meal.id === mealId);
  
  const currentMealIsFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(meal => (meal.id === mealId)),
  );

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({toggleFav: toggleFavoriteHandler});
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({isFav: currentMealIsFavorite});
  }, [currentMealIsFavorite]);

  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imgUrl}} style={styles.image} />
      <View style={{...styles.mealRow, ...styles.details}}>
        <DefaultText style={styles.bottomTexts}>
          {selectedMeal.duration}m
        </DefaultText>
        <DefaultText style={styles.bottomTexts}>
          {selectedMeal.complexity}
        </DefaultText>
        <DefaultText style={styles.bottomTexts}>
          {selectedMeal.affordability}
        </DefaultText>
      </View>
      <Text style={styles.title}> Ingredients</Text>

      {selectedMeal.ingredients.map((item, index) => {
        return <ListItem key={index}>{item}</ListItem>;
      })}

      <Text style={styles.title}> Steps</Text>
      {selectedMeal.steps.map((item, index) => {
        return <ListItem key={index}>{item}</ListItem>;
      })}
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = navigationData => {
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavorite = navigationData.navigation.getParam('toggleFav');
  const isFav = navigationData.navigation.getParam('isFav');

  return {
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="add"
          iconName={isFav ? 'star' : 'star-o'}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
    headerTitle: mealTitle,
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'normal',
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    fontSize: 20,
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});
export default MealDetailsScreen;

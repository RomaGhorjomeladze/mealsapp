import React from 'react';
import {CATEGORIES} from '../data/dummy-data';
import {useSelector} from 'react-redux'

import MealList from '../components/MealList';

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector((state)=>state.meals.filteredMeals)
  // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  const displayMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList displayMeals={displayMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: selectedCategory.color,
    },
    headerTitleStyle: {
      marginRight: 70,
    },
  };
};

export default CategoryMealsScreen;

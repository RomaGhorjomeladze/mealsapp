import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux'

import {CATEGORIES} from '../data/dummy-data';
import MealItem from '../components/MealItem';
import mealsReducer from '../store/reducers/meals';



const MealList = (props) => {
  
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
  
  const renderMealItem = itemData => {
    
    let itemForColor = CATEGORIES.filter(category => {
      return itemData.item.categoryIds.includes(category.id);
    });


    const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id)
    return (
      <MealItem
        duration={itemData.item.duration}
        title={itemData.item.title}
        complexity={itemData.item.complexity.toUpperCase()}
        affordability={itemData.item.affordability.toUpperCase()}
        image={itemData.item.imgUrl}
        textColor={itemForColor[0].color}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'Details',
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFavorite
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={props.displayMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{width: '100%', paddingHorizontal: 15}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default MealList;

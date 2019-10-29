import React from 'react';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native'

import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText'

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  if (favMeals.length < 1 || !favMeals) {

    return (
      <View style = {styles.container}>
        <DefaultText>No favorite meals detected, please try to add some !!!</DefaultText>
      </View>
    );
  } else {

    return <MealList navigation={props.navigation} displayMeals={favMeals} />;
  }
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="bars"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerStyle: {
      backgroundColor: '#3FEEE6',
    },
    headerTitleStyle: {
      marginRight: 70,
    },
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default FavoritesScreen;

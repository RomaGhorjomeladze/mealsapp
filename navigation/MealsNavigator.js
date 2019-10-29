import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const DefaultNavScreenOptions = {
  headerTintColor: 'white',
  headerTitleContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoriesMeal: {
      screen: CategoriesMealsScreen,
    },
    Details: {
      screen: MealDetailsScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#F375F3',
        },
      },
    },
  },
  {
    defaultNavigationOptions: DefaultNavScreenOptions,
  },
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
    },
    MealDetails: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: DefaultNavScreenOptions,
  },
);

const MealsFavoriteTabNav = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Icon name="linux" size={25} color={tabInfo.tintColor} />;
      },
    },
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Icon name="star" size={25} color={tabInfo.tintColor} />;
      },
    },
  },
});

const FiltersNavigator = createStackNavigator(
  {
    Filters: {
      screen: FiltersScreen,
      headerTitleContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
  {
    defaultNavigationOptions: DefaultNavScreenOptions,
  },
);

const MainNavigator = createDrawerNavigator(
  {
    mealsFavs: {
      screen: MealsFavoriteTabNav,
      navigationOptions: {
        drawerLabel: 'Meals',
        drawerIcon: <Icon name="linux" size={15}  />,
      },
    },
    Filters: {
      screen: FiltersNavigator,
      navigationOptions: {
        drawerLabel: 'Filter',
        drawerIcon: <Icon name="filter" size={15} />,
      }
    },
  },
  {
    contentOptions: {
      activeTintColor: 'orange',
      labelStyle: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 'normal',
      },
    },
  },
);

export default createAppContainer(MainNavigator);

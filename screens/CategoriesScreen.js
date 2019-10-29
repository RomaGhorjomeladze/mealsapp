import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import {CATEGORIES} from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoriesMeal',
            params: {categoryId: itemData.item.id},
          });
        }}
      />
    );
  };
  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Category',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="bars"
          onPress={() => {
            navData.navigation.toggleDrawer()
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
  },
  button: {
    flex: 1,
  },
  mgLeft: {
    marginLeft: 30,
  },
});
export default CategoriesScreen;

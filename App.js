import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MealsNavigator from './navigation/MealsNavigator';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import mealsReducer from './store/reducers/meals';

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

const App = props => {
  return (
    <Provider store = {store}>
      <MealsNavigator />
    </Provider>
  );
};
const styles = StyleSheet.create({
  contianer: {
    display: 'flex',
    margin: 20,
  },
});

export default App;

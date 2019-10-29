import React from 'react';
import {HeaderButton as Button} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/FontAwesome';


const CustomHeaderButton = props => {

  return (
    <Button
      {...props}
      IconComponent={Icon}
      iconSize={23}
      color = 'white'
      />
  );
};

export default CustomHeaderButton;

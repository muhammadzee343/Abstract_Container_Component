import React from 'react';
import {Text, View} from 'react-native';

const TextContainer = props => {
  return (
    <View
      style={{
        // backgroundColor: 'red',
        minHeight: 30,
        // minWidth: '10%',
        width: '90%',
      }}>
      <Text style={{fontFamily: 'sans-serif-light'}}>{props.title}</Text>
    </View>
  );
};

export default TextContainer;

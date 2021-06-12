import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ripple from 'react-native-material-ripple';

const SquareButton = props => {
  return (
    <Ripple
      rippleColor="gray"
      rippleDuration={1000}
      rippleOpacity={0.87}
      style={styles.squareButtonStyle}
      onPress={props.onPress}>
      <Text style={styles.buttonStyle}>{props.title}</Text>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontSize: 17,
    color: '#fff',
  },
  squareButtonStyle: {
    height: 50,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#69A03A',
    borderRadius: 13,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});

export default SquareButton;

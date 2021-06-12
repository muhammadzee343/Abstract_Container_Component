import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ripple from 'react-native-material-ripple';

const SquareButton = props => {
  return (
    <Ripple
      rippleColor="gray"
      rippleDuration={1000}
      rippleOpacity={0.87}
      style={[
        props.leftButtonIcon
          ? {
              height: 50,
              width: props.width ? props.width : '80%',
              backgroundColor: '#69A03A',
              borderRadius: 13,
              flexDirection: 'row',
            }
          : {
              height: 50,
              width: props.width ? props.width : '80%',
              justifyContent: 'center',
              backgroundColor: '#69A03A',
              borderRadius: 13,
              flexDirection: 'row',
            },
      ]}
      onPress={props.onPress}>
      {props.leftButtonIcon ? (
        <View
          style={{
            height: 50,
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {props.leftButtonIcon}
        </View>
      ) : null}
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
  squareButtonDefaultStyle: {
    height: 50,
    width: '80%',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#69A03A',
    borderRadius: 13,
    // paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
  },
  squareButtonInverse_WithPropsStyle: {
    height: 50,
    width: '80%',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#69A03A',
    borderRadius: 13,
    // paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
  },
});

export default SquareButton;

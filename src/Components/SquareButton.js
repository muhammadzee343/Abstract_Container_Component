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
          ? [
              styles.squareButtonInverse_WithPropsStyle,
              {width: props.width ? props.width : '30%'},
            ]
          : [
              styles.squareButtonDefaultStyle,
              {width: props.width ? props.width : '30%'},
            ],
      ]}
      onPress={props.onPress}>
      {props.leftButtonIcon ? (
        <View
          style={{
            height: 50,
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'gray'
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
    // width: '80%',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#69A03A',
    borderRadius: 13,
    // paddingVertical: 10,
    flexDirection: 'row',
  },
  squareButtonInverse_WithPropsStyle: {
    height: 50,
    // width: '80%',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#69A03A',
    borderRadius: 13,
    // paddingVertical: 10,
    flexDirection: 'row',
  },
});

export default SquareButton;

import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

const CustomHeader = props => {
  return (
    <View style={styles.container}>
      <View
        style={
          props.leftIcon
            ? styles.leftWithPropsIconConainer
            : styles.leftWithoutPropsIconConainer
        }>
        {props.leftIcon ? props.leftIcon : null}
      </View>
      <View
        style={
          props.leftIcon
            ? styles.headerWithPropsTitleContainer
            : styles.headerWithoutPropsTitleContainer
        }>
        {props.dynamicTitle ? (
          <Text style={styles.headerTextStyle}>{props.dynamicTitle}</Text>
        ) : null}
      </View>
      <View style={styles.rightIconContainer}>
        {props.rightIcon ? <Text>{props.rightIcon}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    backgroundColor: '#69A03A',
    flexDirection: 'row',
  },
  leftWithPropsIconConainer: {
    width: '13%',
    // backgroundColor: 'red',
    height: 40,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  leftWithoutPropsIconConainer: {
    width: '2%',
    // backgroundColor: 'gray',
    height: 40,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  headerWithPropsTitleContainer: {
    width: '65%',
    // backgroundColor: 'red',
    height: 40,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  headerWithoutPropsTitleContainer: {
    width: '75%',
    // backgroundColor: 'red',
    height: 40,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  headerTextStyle: {
    fontSize: 17,
    fontFamily: 'sans-serif-condensed',
    color: '#fff',
  },
  rightIconContainer: {
    width: '20%',
    // backgroundColor: 'green',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
});

export default CustomHeader;

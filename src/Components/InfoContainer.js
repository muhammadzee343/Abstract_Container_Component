import React from 'react';
import {Text, View} from 'react-native';

const InfoContainer = props => {
  return (
    <View
      style={{
        // backgroundColor: 'red',
        // height: 30,
        width: '90%',
        flexDirection: 'row',
      }}>
      <View
        style={{
          minWidth: 30,
          justifyContent: 'center',
          width: '10%',
        }}>
        {props.leftIcon ? props.leftIcon : null}
      </View>
      <View
        style={{
          justifyContent: 'center',
          width: '70%',
          padding: 4,
        }}>
        <Text style={{fontFamily: 'sans-serif-light'}}>{props.title}</Text>
        {props.subTitle ? (
          <Text
            style={{
              fontFamily: 'sans-serif-light',
              fontSize: 12,
              color: 'gray',
            }}>
            {props.title}
          </Text>
        ) : null}
      </View>
      {props.rightIcon ? (
        <View
          style={{
            minWidth: 30,
            justifyContent: 'center',
            width: '10%',
            alignItems: 'center',
          }}>
          {props.rightIcon}
        </View>
      ) : null}
    </View>
  );
};

export default InfoContainer;

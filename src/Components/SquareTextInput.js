import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const SquareTextInput = props => {
  const [value, onChangeText] = React.useState(
    props.value ? props.value : null,
  );

  return (
    <View>
      {props.title ? (
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>{props.title}</Text>
      ) : null}
      <View style={{flexDirection: 'row', marginTop: 5}}>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            onChangeText(text);
          }}
          placeholder={props.placeHolder}
          keyboardType={props.keyboardType ? props.keyboardType : 'default'}
          value={value}
          editable={props.isEditable ? props.isEditable : true}
          autoCapitalize={
            props.autoCapitalize ? props.autoCapitalize : 'sentences'
          }
          autoCorrect={props.autoCorrect ? props.autoCorrect : true}
          autoFocus={props.autoFocus ? props.autoFocus : false}
          clearTextOnFocus={
            props.clearTextOnFocus ? props.clearTextOnFocus : false
          }
          keyboardAppearance={
            props.keyboardAppearance ? props.keyboardAppearance : 'default'
          }
          secureTextEntry={
            props.secureTextEntry ? props.secureTextEntry : false
          }
          textAlign={props.textAlign ? props.textAlign : 'left'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    minHeight: 40,
    // margin: 12,
    width: '90%',
    borderTopWidth: 1,
    borderBottomWidth: 1.5,
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    // borderColor: 'gray',
    borderRadius: 10,
    padding: 13,
  },
});

export default SquareTextInput;

import React, {PureComponent} from 'react';
import {StatusBar, Text, View} from 'react-native';
import BackArrowIcon from './src/Assets/icons/BackArrow';
import BellIcon from './src/Assets/icons/BellIcon';
import CustomHeader from './src/Components/CustomHeader';
import SquareButton from './src/Components/SquareButton';
import SquareTextInput from './src/Components/SquareTextInput';
import InfoContainer from './src/Components/InfoContainer';
import TextContainer from './src/Components/TextConatiner';

class App extends PureComponent {
  SquareButtOnClickAction = () => {
    console.log('on click of square button');
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#69A03A" />
        <CustomHeader
          leftIcon={<BackArrowIcon iconColor="white" />}
          dynamicTitle="Title Text"
          rightIcon={<BellIcon iconColor="white" />}
        />

        <View style={{flex: 0.22, alignItems: 'center', marginTop: 15}}>
          <SquareTextInput
            title="Email"
            placeHolder="Enter your Email"
            // value="val"
            // keyboardType="numeric"
            isEditable={true}
          />
        </View>

        <View style={{marginTop: 30, alignItems: 'center'}}>
          <InfoContainer
            leftIcon={<BellIcon iconColor="#69A03A" />}
            title="My Orders"
            subTitle="this is subtitle"
            // rightIcon={<BackArrowIcon iconColor="#69A03A" />}
          />
        </View>

        <View style={{marginTop: 30, alignItems: 'center'}}>
          <TextContainer title="Verify your mobile number" />
        </View>
        <View style={{flex: 0.22, alignItems: 'center'}}>
          <SquareTextInput
            placeHolder="Mobile Number"
            // value="val"
            width="50%"
            isEditable={true}
          />
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <SquareButton
            title="Next"
            onPress={this.SquareButtOnClickAction}
            width="50%"
            // leftButtonIcon={<BellIcon iconColor="white" />}
          />
        </View>
      </View>
    );
  }
}

export default App;

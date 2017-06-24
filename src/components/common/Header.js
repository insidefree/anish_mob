import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';



const Header = ({ title }) => {
  const { textStyle, viewStyle } = styles;
  return (
    <Image
      source={require('../../assets/menuBG.png')}
      style={viewStyle}>
      <Text style={textStyle}>{title || 'default'}</Text>
      <TouchableOpacity>
        <Image source={require('../../assets/menuButton.png')} style={{
          height: 25.5,
          width: 31,
          marginRight: 20
        }} />
      </TouchableOpacity>
    </Image>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
    color: '#383838'
  },
  viewStyle: {
    paddingTop: (Platform.OS === 'android') ? 25 : 16,
    resizeMode: 'stretch',
    flex: 1,
    height: null,
    width: null,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    // height: 60,
    // backgroundColor: '#EE5350'
    // padding: 16,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#fff',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 8 },
    // shadowOpacity: 0.8,
    // elevation: 8,
    // position: 'relative'
  }
};

export default Header
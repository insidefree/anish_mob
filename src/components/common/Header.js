import React from 'react';
import {
  Text,
  View
} from 'react-native';

const styles = {
  textStyle: {
    fontSize: 20,
    color: '#383838'
  },
  viewStyle: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
    elevation: 8,
    position: 'relative'
  }
};

const Header = ({ title }) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{ title }</Text>
    </View>
  );
};

Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

export { Header };
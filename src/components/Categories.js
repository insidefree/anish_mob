import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, TouchableOpacity, Text } from 'react-native'

import { firebaseApp } from '../config/firebase';

// components
import Category from '../components/common/Category'
import LoginForm from '../components/LoginForm'

class Categories extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {
          !this.props.email ?
          <LoginForm title="Register" /> :
          <TouchableOpacity onPress={() => firebaseApp.auth().signOut()}>
            <Text style={{ padding: 16 }}>Log Out</Text>
          </TouchableOpacity>
        }
        {this.props.categories.map(el => <Category key={el.categoryId} {...el} />)}
      </ScrollView>
    )
  }
}

const styles = {
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
};

const mapStateToProps = state => ({
  categories: state.categories.dataCategories,
  email: state.user.email,
});

export default connect(mapStateToProps)(Categories)

import React from 'react';
import { View, StyleSheet } from 'react-native';
import UsersList from './UsersList';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBeA6MMM214twfwfk0iaGLtqfhr7Yv2mRg",
    authDomain: "expo-algolia.firebaseapp.com",
    databaseURL: "https://expo-algolia.firebaseio.com",
    projectId: "expo-algolia",
    storageBucket: "",
    messagingSenderId: "20361302098"
  };

export default class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp(config)
  }

  render() {
    return (
      <View style={styles.container}>
        <UsersList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

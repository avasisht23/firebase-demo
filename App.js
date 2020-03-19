import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyANA5D7me2Pdg4FDq5OK1qNsSNpelzwf-8",
    authDomain: "mobile-app-2a24b.firebaseapp.com",
    databaseURL: "https://mobile-app-2a24b.firebaseio.com",
    projectId: "mobile-app-2a24b",
    storageBucket: "mobile-app-2a24b.appspot.com",
    messagingSenderId: "963950188113",
    appId: "1:963950188113:web:f07f6d9ce9fc52fed60a70",
    measurementId: "G-XHR96JFXR0"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

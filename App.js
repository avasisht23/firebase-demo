import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.analytics();

async function query() {
  var ref = firebase.database().ref("table1");
  ref.once('value').then(function(snapshot) {
    console.log(snapshot.val())
  });
}

async function add(id) {
  firebase.database().ref('table2/' + id).set({
    username: "ajay",
    email: "a.vasisht98@gmail.com"
  }, function(error) {
    if (error) {
      console.log("The write failed...")
    } else {
      console.log("Data saved successfully!")
    }
  });
}

async function remove(id) {
  firebase.database().ref('table2/' + id).set(null
    , function(error) {
    if (error) {
      console.log("The delete failed...")
    } else {
      console.log("Data deleted successfully!")
    }
  });
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title = "Query"
        onPress = {() => query()}
      />

      <Button
        title = "Add"
        onPress = {() => add(1)}
      />

      <Button
        title = "Remove"
        onPress = {() => remove(1)}
      />
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

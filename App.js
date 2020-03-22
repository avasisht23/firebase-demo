import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import * as firebase from 'firebase';
import { events, initialize, identify, track } from "./amplitudeApi.js"
// import firebase from 'react-native-firebase';
// import 'firebase/analytics';
console.log("hi")
console.log(events)
// var firebaseConfig = {
//     apiKey: "AIzaSyANA5D7me2Pdg4FDq5OK1qNsSNpelzwf-8",
//     authDomain: "mobile-app-2a24b.firebaseapp.com",
//     databaseURL: "https://mobile-app-2a24b.firebaseio.com",
//     projectId: "mobile-app-2a24b",
//     storageBucket: "mobile-app-2a24b.appspot.com",
//     messagingSenderId: "963950188113",
//     appId: "1:963950188113:web:f07f6d9ce9fc52fed60a70",
//     measurementId: "G-XHR96JFXR0"
//   };
// // Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// firebase.analytics();

async function id() {
  var userId = "1"
  var properties = {
    'color': 'blue',
    'age': 20,
    'key': 'value'
  }
  identify(userId, properties)
}

async function log() {
  var logEvent = events.USER_LOGGED_IN;
  console.log(logEvent)
  var properties = {
    'color': 'blue',
    'age': 20,
    'key': 'value'
  }
  track(logEvent, properties)

}


// async function query() {
//   var ref = firebase.database().ref("table1");
//   ref.once('value').then(function(snapshot) {
//     console.log(snapshot.val())
//   });
//
//   await firebase.analytics().logEvent('queried', {
//     id: '123456789',
//     color: 'red',
//     via: 'ProductCatalog',
//   });
//
//   console.log("add event")
// }
//
// async function add(id) {
//   var ref = firebase.database().ref('table2/')
//   var newItem = ref.push()
//   newItem.set({
//     timestamp: firebase.database.ServerValue.TIMESTAMP,
//     username: "ajay",
//     email: "a.vasisht98@gmail.com"
//   }, function(error) {
//     if (error) {
//       console.log("The write failed...")
//     } else {
//       console.log("Data saved successfully!")
//     }
//   });
// }
//
// async function remove(id) {
//   firebase.database().ref('table2/' + id).set(null
//     , function(error) {
//     if (error) {
//       console.log("The delete failed...")
//     } else {
//       console.log("Data deleted successfully!")
//     }
//   });
// }

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title = "Identify"
        onPress = {() => id()}

      />
      <Button
        title = "Log"
        onPress = {() => log()}

      />
    </View>
  );
}
// <Button
//   title = "Query"
//   onPress = {() => query()}
// />
// <Button
//   title = "Add"
//   onPress = {() => add(1)}
// />
// <Button
//   title = "Remove"
//   onPress = {() => remove(1)}
// />
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

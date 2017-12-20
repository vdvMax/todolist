/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class App extends Component<{}> {
  render() {

    return (
      <View  style = {styles.container}>

        <Text style={styles.itemsText}>{this.props.date}</Text>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc",
    height: 50,
    paddingLeft:10,
    alignItems : 'center',
    borderBottomColor:'#aaa',
    borderBottomWidth:2,
    paddingTop: 0,
    paddingRight: 5
  },
  itemsText: {
    fontSize:30,
    color:'#000'
  }
});

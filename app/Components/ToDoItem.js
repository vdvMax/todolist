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
      <View style = {styles.container}>
      <TouchableOpacity onLongPress={this.props.deleteit}>
        <Text style={styles.itemsText}>{this.props.title}</Text>
      </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    height: 50,
    paddingLeft:10,
    alignItems : 'stretch',
    borderBottomColor:'#aaa',
    borderBottomWidth:2,
    paddingTop: 0,
    paddingRight: 5
  },
  itemsText: {
    fontSize:20,
    color:'#000'
  }
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import ToDoItem from "./app/Components/ToDoItem";
import ToDoSection from "./app/Components/ToDoSection";

import {
  Platform,
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  DatePickerAndroid
} from "react-native";

groupBySec = function(arr,prop) {
  var dateArrKeyHolder = [];
var dateArr = [];
var obj= []
arr.forEach(function(item){
    dateArrKeyHolder[item[prop]] = dateArrKeyHolder[item[prop]]||{};
     obj = dateArrKeyHolder[item[prop]];
    if(Object.keys(obj).length == 0)
    dateArr.push(obj);

    obj[prop] = item[prop];
    obj['data']  = obj['data'] || [];

    obj['data'].push({title:item['title'], checked: item.checked });
});
return(dateArr)};



export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      itemsList: [],
      dateList: []
    };
  }

  componentDidMount() {
    this.LoadData();
    //  this.setState({itemsList: [{title:'123'},{title:'234'}]})
  }
  render() {
    //AsyncStorage.setItem('ToDoList', JSON.stringify([{data: [{name:'1qwe'},{name:'dsa'}], title: 'ewq'}]));

    //
    //var qwe = [{title:'123',title1:'234'}]
    var qwe = [
      { date: "123", title: "5555", checked:true},
      { date: "123", title: "555532", checked:false },
      { date: "555", title: "5555", checked:true},
      { date: "666", title: "555532", checked:false },
      { date: "123", title: "5555", checked:true},
      { date: "123", title: "555532", checked:false },
      { date: "555", title: "5555", checked:true},
      { date: "666", title: "555532", checked:false }
    ];

  //  qwe =qwe.groupBy('date');
  console.warn(groupBySec(qwe,'date'));

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.addInput}
            underlineColorAndroid="transparent"
            placeholderTextColor="#fff"
            placeholder="Создать задание"
          />
        </View>
        <SectionList
          renderItem={({ item }) => <ToDoItem title={item.title} deleteit={()=>deleteit()} />}
          renderSectionHeader={({ section }) => (
            <ToDoSection date={section.date} />
          )}
          sections={groupBySec(qwe,'date')}
        />
      </View>
    );
  }


  deleteit(){

  }

  LoadData() {
    //    AsyncStorage.getItem("ToDoList", (err, result) => {
    //      this.setState({ dataList: JSON.parse(result) });
    //  console.warn(this.state.dataList);
    //    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "#999999",
    height: 70,
    borderBottomWidth: 5,
    borderBottomColor: "#DDD",
    alignItems: "flex-end",
    paddingTop: 0,
    paddingRight: 5
  },
  addButton: {
    position: "absolute",
    flex: 0,
    width: 50,
    height: 50,
    alignItems: "center"
  },
  addText: {
    color: "#fff",
    fontSize: 50
  },
  addInput: {
    fontSize: 20,
    marginRight: 50,
    marginLeft: 10,
    flex: 1,
    alignSelf: "stretch",
    color: "#fff"
    //backgroundColor:'#',
  }
});

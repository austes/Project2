/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  Platform,  StyleSheet,  Text,  View, Button, TouchableOpacity, Alert} from 'react-native';

export default class App extends Component<{}> {
<<<<<<< HEAD
  render() {
    return (
        <View>
          <View>
            <TouchableOpacity>
              <Text>Button1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Button2</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Button3</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Button4</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightBlue',
        padding: 10,
        flexDirection: 'row',
    },
    left: {
        height: '100%',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'red',
        paddingTop: "15%",
        paddingBottom: '40%',
    },
    right: {
        height: '100%',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
    box: {
        height: 80,
        width: 120,
        fontWeight: 'bold',

        textAlign: 'center',
        textAlignVertical: "center"
    },
    button: {
        height: 50,
        width: 150,
        backgroundColor: 'green',
        alignItems: 'center',
        borderWidth: 5,
    },
    buttonText: {
        height: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
=======

    constructor() {
        super()

        this.state = {
            backgroundColor1: "white",
            backgroundColor2: "white",
            backgroundColor3: "white",
            backgroundColor4: "white"
        };

    }

    render() {
        var boxNme = ["BOX1","BOX4","BOX3","BOX4"];

        return (
            <View style={styles.container}>
              <View style={styles.kairys}>
                <TouchableOpacity style={styles.mygtukas}
                                  onPress={() => {this.setState({backgroundColor1: "yellow"})}}>
                  <Text style={styles.mygtukoText}>Button1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mygtukas}
                                  onPress={() => {this.setState({backgroundColor2: "red"})}}>
                  <Text style={styles.mygtukoText}>Button2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mygtukas}
                                  onPress={() => {this.setState({backgroundColor3: "blue"})}}>
                  <Text style={styles.mygtukoText}>Button3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mygtukas}
                                  onPress={() => {this.setState({backgroundColor4: "green"})}}>
                  <Text style={styles.mygtukoText}>Button4</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.desinys}>
                <Text style={[styles.box, {backgroundColor: this.state.backgroundColor1}]}>{boxNme[0]}</Text>
                <Text style={[styles.box, {backgroundColor: this.state.backgroundColor2}]}>{boxNme[1]}</Text>
                <Text style={[styles.box, {backgroundColor: this.state.backgroundColor3}]}>{boxNme[2]}</Text>
                <Text style={[styles.box, {backgroundColor: this.state.backgroundColor4}]}>{boxNme[3]}</Text>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightBlue',
      padding: 10,
      flexDirection: 'row',
  },
  left: {
      height: '100%',
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'red',
      paddingTop: "15%",
      paddingBottom: '40%',
  },
  right: {
      height: '100%',
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'yellow',
  },
  box: {
      height: 80,
      width: 120,
      fontWeight: 'bold',

      textAlign: 'center',
      textAlignVertical: "center"
  },
  button: {
      height: 50,
      width: 150,
      backgroundColor: 'green',
      alignItems: 'center',
      borderWidth: 5,
  },
  buttonText: {
      height: '100%',
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center'
  },
>>>>>>> create functionality
});
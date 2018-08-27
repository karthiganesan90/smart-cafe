import React, {Component} from 'react';
import {Animated, Platform, StyleSheet, Text, View, Image} from 'react-native';

export interface Props{}
export interface State{}
export class Welcome extends React.PureComponent<Props, State>{

  constructor(props:Props){
    super(props);
    //this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }

  render(){
      return(<Animated.View style={styles.container}>
          <Animated.Text style={styles.welcome}>Welcome to Smart Cafe</Animated.Text>
          <Animated.Image source={require('../assets/png/launch-icon.png')}/>
      </Animated.View>);
  }

  componentDidMount(){
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
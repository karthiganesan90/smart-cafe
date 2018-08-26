import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export interface Props{}
export interface State{}
export class Welcome extends React.PureComponent<Props, State>{
    render(){
        return( <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to Smart Cafe</Text>
            <Image
            source={require('./assets/png/launch-icon.png')}
            />
        </View>);
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
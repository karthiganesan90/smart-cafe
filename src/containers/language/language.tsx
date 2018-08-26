import * as React from 'react';
import { View, Text } from 'react-native';

export interface State{}

export interface Props{}

export class Language extends React.PureComponent<Props, State> {

    render(){
        return(<View><Text>Select your language</Text></View>);
    }
}
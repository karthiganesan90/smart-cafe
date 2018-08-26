import React, {Component} from 'react';
import { Welcome } from './containers/welcome';
import { Provider } from 'react-redux'

export interface Props{}
export default class App extends React.PureComponent<Props> {
  render() {
      return(<Welcome />);
  }
}



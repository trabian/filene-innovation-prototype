import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View
} from 'react-native';

let styles;

import Overview from './src/scenes/Overview';

export default class FilenePrototype extends Component {
  
  render() {

    return (
      <Overview />
    );
  }
  
}

styles = StyleSheet.create({

});

AppRegistry.registerComponent('FilenePrototype', () => FilenePrototype);

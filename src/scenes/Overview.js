import React, {
  Component,
  StyleSheet,
  View
} from 'react-native';

import ExNavigator from '@exponent/react-native-navigator';

import CustomNavigator from './Navigator';

import Prototypes from './Prototypes';

let styles;

const prototypesRoute = {

  getTitle: () => 'Prototypes',

  getSceneClass: () => Prototypes

};

import { instantIssue } from './routes';

let route = prototypesRoute;

// route = instantIssue;

export default class Overview extends Component {

  render() {

    const initialRoute = {

      renderScene: (navigator) => {
        return <CustomNavigator navigator={navigator} initialRoute={route} />;
      }
            
    };

    return (
      <ExNavigator
        showNavigationBar={false}
        initialRoute={initialRoute} />
    );

  }

}

styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

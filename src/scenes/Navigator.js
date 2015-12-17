import React, {
  Component,
  Navigator,
  StyleSheet
} from 'react-native';

import ExNavigator from '@exponent/react-native-navigator';

let styles;

export default class CustomNavigator extends Component {
  
  render() {

    return (
      <ExNavigator sceneStyle={styles.sceneStyle} {...this.props} />
    );
  }
  
}

styles = StyleSheet.create({
  root: {
    flex: 1
  },
  sceneStyle: {
    paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight,
    backgroundColor: '#eee'
  }
});

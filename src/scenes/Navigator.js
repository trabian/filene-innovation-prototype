import React, {
  Component,
  Navigator,
  StyleSheet
} from 'react-native';

import { colors } from '../styles';

import ExNavigator from '@exponent/react-native-navigator';

let styles;

export default class CustomNavigator extends Component {

  static defaultProps = {
    includeTopPadding: true
  }
  
  render() {

    const topPaddingStyle = this.props.includeTopPadding && {
      paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight
    };

    return (
      <ExNavigator sceneStyle={[styles.sceneStyle, topPaddingStyle]} {...this.props} />
    );
  }
  
}

styles = StyleSheet.create({
  root: {
    flex: 1
  },
  sceneStyle: {
    backgroundColor: colors.background
  }
});

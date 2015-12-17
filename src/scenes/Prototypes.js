import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import ExNavigator from '@exponent/react-native-navigator';

import rightArrow from './images/rightArrow.png';

let styles;

import { colors } from '../styles';

import { instantIssue } from './routes';

import CustomNavigator from './Navigator';

const prototypeRoutes = [instantIssue];

export default class Prototypes extends Component {

  handleOpenPrototype(route) {

    this.props.navigator.parentNavigator.push({

      renderScene: (navigator) => {
        return <CustomNavigator navigator={navigator} initialRoute={route} showNavigationBar={false} includeTopPadding={false} />
      },

      configureScene: () => ExNavigator.SceneConfigs.FloatFromBottom

    });
    
  }

  render() {

    return (
      <View style={styles.root}>
        {prototypeRoutes.map(::this.renderPrototypeLink)}
      </View>
    );
  }

  renderPrototypeLink(route, index) {

    return (
      <TouchableOpacity onPress={() => this.handleOpenPrototype(route)} key={index}>
        <View style={styles.link}>
          <Text style={styles.linkText}>{route.label || route.getTitle()}</Text>
          <Image source={rightArrow} style={styles.rightArrow} />
        </View>
      </TouchableOpacity>
    );

  }

}

styles = StyleSheet.create({
  root: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    marginTop: 30
  },
  link: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightArrow: {

  }
});

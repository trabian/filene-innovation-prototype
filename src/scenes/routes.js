import ExNavigator from '@exponent/react-native-navigator';

import InstantIssue from './InstantIssue';

const defaultRouteConfig = {

  configureScene: () => ExNavigator.SceneConfigs.FloatFromBottom

};

export const instantIssue = {

  ...defaultRouteConfig,

  label: 'Instant Card Issue',

  getTitle: () => 'Welcome to the CU!',

  getSceneClass: () => InstantIssue

};

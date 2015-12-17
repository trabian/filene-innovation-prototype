import React from 'react-native';

import ExNavigator from '@exponent/react-native-navigator';

import InstantIssue from './InstantIssue';

import WelcomeTitle from './components/WelcomeTitle';

const defaultRouteConfig = {

  configureScene: () => ExNavigator.SceneConfigs.FloatFromBottom

};

export const instantIssue = {

  ...defaultRouteConfig,

  label: 'Instant Card Issue',

  getTitle: () => 'Welcome to Filene!',

  getSceneClass: () => InstantIssue

};

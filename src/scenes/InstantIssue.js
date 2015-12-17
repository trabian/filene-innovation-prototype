import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

let styles;

export default class InstantIssue extends Component {
  
  render() {
    return (
      <View style={styles.root}>
        <Text>Welcome to Filene CU!</Text>
      </View>
    );
  }
  
}

styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

import React, {
  Component,
  Image,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import creditCardBackground from '../../images/creditCardBackground.png';

import addToAppleWallet from '../../images/addToAppleWallet.png';

import { colors, shadows } from '../../styles';

let styles;

export default class Card extends Component {

  state = {
    revealNumber: false
  }

  toggleRevealNumber() {
    LayoutAnimation.configureNext({
      ...LayoutAnimation.Presets.linear,
      duration: 200
    });
    this.setState({ revealNumber: !this.state.revealNumber });
  }

  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image source={creditCardBackground} style={styles.image}>
          <View style={styles.content}>
            {this.state.revealNumber ? this.renderNumber() : this.renderMask()}
          </View>
        </Image>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => alert('add to wallet')}>
            <Image source={addToAppleWallet} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} onPress={::this.toggleRevealNumber}>
            {this.renderRevealButton()}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderRevealButton() {

    if (this.state.revealNumber) {
      return (
        <View style={styles.revealButton}>
          <Text style={styles.reveal}>Hide card number</Text>
        </View>
      );
    }
    
    return (
      <View style={styles.revealButton}>
        <Text style={styles.reveal}>Reveal card number</Text>
        <Text style={styles.revealSecondary}>For online purchases</Text>
      </View>
    );

  }

  renderNumber() {
    return [
      <Text style={styles.cardNumber} key="number">4242 4242 4242 4323</Text>,
      <Text style={styles.cardDetails} key="details">
        Expires: <Text style={styles.cardDetailsValue}>07/20</Text>
        {' · '}
        CVV: <Text style={styles.cardDetailsValue}>234</Text>
      </Text>
    ];
  }

  renderMask() {
    return <Text style={styles.cardNumber}>xxxx xxxx xxxx 4323</Text>;
  }

}

styles = StyleSheet.create({
  root: {

  },
  image: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 125
  },
  content: {
    backgroundColor: 'transparent'
  },
  cardNumber: {
    color: colors.white,
    fontSize: 24,
    textAlign: 'center',    
    ...shadows.raised,
    shadowColor: 'rgba(0,0,0,.80)',
  },
  cardDetails: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '300',
    marginTop: 5,
    ...shadows.raised,
    shadowColor: 'rgba(0,0,0,.80)'
  },
  cardDetailsValue: {
    fontWeight: '500'
  },
  actions: {
    margin: 15,
    marginHorizontal: 25,
    marginBottom: 0,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1
  },
  reveal: {
    fontWeight: '500',
    fontSize: 13,
    color: colors.brandRed
  },
  revealSecondary: {
    fontSize: 12,
    color: colors.meta
  }
});

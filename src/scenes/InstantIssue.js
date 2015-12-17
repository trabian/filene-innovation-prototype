import React, {
  Component,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Card from './components/Card';

import { colors } from '../styles';

let styles;

export default class InstantIssue extends Component {

  render() {
    return (
      <ScrollView style={styles.root}>
        <View style={styles.introduction}>
          <Text style={styles.introductionTitle}>
            Your debit card and checking account are ready!
          </Text>
          <Text style={styles.introductionBody}>
            Your physical card and checkbook will be mailed to 10825 Heatherfield Drive within two weeks, but you can start using these accounts immediately.
          </Text>
        </View>
        <Text style={styles.sectionTitle}>DEBIT CARD</Text>
        <View style={styles.section}>
          <Card style={styles.card} />
        </View>
        <Text style={styles.sectionDetails}>
          <Text style={styles.link}>Learn more about the Apple Wallet</Text>, including how to use Apple Pay to withdraw cash from Filene CU ATMS.
        </Text>
        <Text style={styles.sectionTitle}>BANK ACCOUNT</Text>
        <View style={styles.section}>
          <View style={styles.bankAccount}>
            <Text style={styles.bankText}>
              Account <Text style={styles.bankNumber}>#1288349</Text>
            </Text>
            <Text style={styles.bankText}>
              Routing <Text style={styles.bankNumber}>#983234883</Text>
            </Text>
          </View>
        </View>
        <Text style={styles.sectionDetails}>
          You can use this to set up direct deposit with your employer or pay bills online. <Text style={styles.link}>Learn more.</Text>
        </Text>
      </ScrollView>
    );
  }

}

styles = StyleSheet.create({
  root: {
    paddingTop: 50,
    flex: 1,
  },
  introduction: {
    margin: 15
  },
  introductionTitle: {
    fontSize: 30,
    fontWeight: '300',
    marginBottom: 10,
    color: colors.brandGreen
  },
  introductionBody: {
    fontSize: 14,
    fontWeight: '300',
    color: '#666'
  },
  section: {
    padding: 12,
    paddingHorizontal: 15,
    marginBottom: 30,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    borderTopWidth: 1,
    borderTopColor: colors.border
  },
  sectionTitle: {
    fontSize: 16,
    color: colors.brandBlue,
    fontWeight: '300',
    marginLeft: 15,
    marginBottom: 5
  },
  sectionDetails: {
    marginTop: -20,
    marginBottom: 25,
    marginHorizontal: 15,
    color: colors.meta,
    fontSize: 13
  },
  bankAccount: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  bankText: {
    fontSize: 14,
    fontWeight: '300'
  },
  bankNumber: {
    fontWeight: '500'
  },
  link: {
    color: colors.brandRed,
    textDecorationLine: 'underline'
  }
});

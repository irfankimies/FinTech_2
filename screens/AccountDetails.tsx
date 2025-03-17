import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ModalAccountDetails from '../components/ModalAccountDetails'
import Colors from '@/constants/colors'

const AccountDetails = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#d10000" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Deposits</Text>
      </View>

      {/* Balance Card */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Total Current Balance</Text>
        <Text style={styles.balanceAmount}>MYR 1402.26</Text>
      </View>

      {/* Account Card */}
      <View style={styles.accountContainer}>
        <View style={styles.accountCard}>
          <View style={styles.accountInfo}>
            <Text style={styles.accountName}>Irfan</Text>
            <View style={styles.accountNumberRow}>
              <Text style={styles.accountNumber}>76 2495612 3</Text>
              <View style={styles.activeTag}>
                <Text style={styles.activeTagText}>Active</Text>
              </View>
            </View>

            <Text style={styles.balanceLabel2}>Current Balance</Text>
            <Text style={styles.accountBalance}>MYR 1402.26</Text>

            <Text style={styles.insuranceText}>
              Protected by PIDM up to MYR 250,000 for each depositor
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.detailsButtonText}>More Details {'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* show modal details acc */}
      <ModalAccountDetails
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.RED,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  balanceContainer: {
    backgroundColor: Colors.RED,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 35,
  },
  balanceLabel: {
    color: '#e0e0e0',
    fontSize: 14,
  },
  balanceLabel2: {
    fontSize: 14,
  },
  balanceAmount: {
    color: Colors.WHITE,
    fontSize: 24,
    fontWeight: 'semibold',
    marginTop: 4,
  },
  accountContainer: {
    flex: 1,
    marginTop: -15,
    borderRadius: 20,
    backgroundColor: Colors.BG_GRAY,
  },
  accountCard: {
    backgroundColor: Colors.WHITE,
    borderRadius: 12,
    margin: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: 30,
  },
  accountInfo: {
    padding: 16,
  },
  accountName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.BLACK,
  },
  accountNumberRow: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 4,
    marginBottom: 30,
  },
  accountNumber: {
    fontSize: 14,
    color: '#666',
    marginRight: 8,
  },
  activeTag: {
    borderWidth: 1,
    borderColor: Colors.AQUA_GREEN,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  activeTagText: {
    color: Colors.AQUA_GREEN,
    fontSize: 12,
    fontWeight: '500',
  },
  accountBalance: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4,
  },
  insuranceText: {
    fontSize: 12,
    color: '#888',
    marginTop: 12,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
  },
  detailsButton: {
    marginTop: 8,
    alignItems: 'center',
    padding: 10,
  },
  detailsButtonText: {
    color: Colors.GRAY_TEXT,
    fontSize: 14,
    fontWeight: 'bold',
  },
})

export default AccountDetails

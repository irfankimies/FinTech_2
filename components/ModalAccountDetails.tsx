import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/colors'

interface ModalAccountDetailsProps {
  modalVisible: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalAccountDetails = ({
  modalVisible,
  setModalVisible,
}: ModalAccountDetailsProps) => {
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.title}>
            <Text style={styles.title2}>Account Details</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text1}>Account Holder</Text>
            <Text style={styles.text2}>MUHAMMAD IRFAN HAKIMI BIN ROSLI</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text1}>Account Nickname</Text>
            <Text style={styles.text2}>irfan</Text>
          </View>
          <View style={[styles.content, { gap: 6 }]}>
            <Text style={styles.text1}>Current Balance</Text>
            <Text style={styles.text2}>MYR 1402.60</Text>
            <Text style={styles.text1}>Available Balance</Text>
            <Text style={styles.text2}>MYR 1392.60</Text>
          </View>
          <View style={[styles.content, { gap: 10 }]}>
            <View>
              <Text style={styles.text1}>Account Number</Text>
              <Text style={styles.text2}>12321312</Text>
            </View>
            <View>
              <Text style={styles.text1}>Account Type</Text>
              <Text style={styles.text2}>BSA-i-FEA-STMT</Text>
            </View>
            <View>
              <Text style={styles.text1}>Account Status</Text>
              <Text style={styles.text2}>active</Text>
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    backgroundColor: Colors.BG_MODAL,
  },
  modalContent: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderRadius: 25,
  },
  content: {
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GRAY,
  },
  title: {
    alignItems: 'center',
  },
  title2: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  text1: {
    color: 'black',
  },
  text2: {
    fontWeight: 'bold',
  },
  doneButton: {
    backgroundColor: Colors.LIGHT_RED,
    marginTop: 110,
    padding: 10,
    width: '85%',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default ModalAccountDetails

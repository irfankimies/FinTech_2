import React, { useState } from 'react'
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

type Props = {
  visible: boolean
  onClose: () => void
  onExit: () => void
}

const ModalExitApp = ({ visible, onClose, onExit}: Props) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Quit app</Text>
          <Text style={styles.message}>
            Are you sure you want to quit the app?{'\n'}
            {'(Will be go to onBoarding page)'}
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.noButton} onPress={onClose}>
              <Text style={styles.noText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.yesButton} onPress={onExit}>
              <Text style={styles.yesText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  triggerButton: { padding: 15, backgroundColor: '#d32f2f', borderRadius: 8 },
  triggerText: { color: 'white', fontWeight: 'bold' },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  message: { fontSize: 14, textAlign: 'center', marginBottom: 20 },
  buttonContainer: { flexDirection: 'row', gap: 10 },
  noButton: {
    backgroundColor: '#666',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  yesButton: {
    backgroundColor: '#d32f2f',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  noText: { color: 'white', fontWeight: 'bold' },
  yesText: { color: 'white', fontWeight: 'bold' },
})

export default ModalExitApp

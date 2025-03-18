import Colors from '@/constants/colors'
import React, { useState } from 'react'
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

type Props = {
  visible: boolean
  onClose: () => void
  onExit: () => void
}

const ModalExitApp = ({ visible, onClose, onExit }: Props) => {
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
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BG_MODAL,
  },
  modal: {
    width: 300,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  message: { fontSize: 14, textAlign: 'center', marginBottom: 20 },
  buttonContainer: { flexDirection: 'row', gap: 10 },
  noButton: {
    backgroundColor: Colors.GRAY,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  yesButton: {
    backgroundColor: Colors.RED,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  noText: { color: Colors.WHITE, fontWeight: 'bold' },
  yesText: { color: Colors.WHITE, fontWeight: 'bold' },
})

export default ModalExitApp

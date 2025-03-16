import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'

type Transaction = {
  amount: string
  time: string
  status: string
  id: string
  to: {
    name: string
    bank: string
    account: string
  }
  from: {
    name: string
  }
  date: string
  transferType: string
  recipientReference: string
}
type TransactionDetailProps = {
  modalVisible: boolean
  setModalVisible: (visible: boolean) => void
  selectedTransaction?: Transaction
}

export default function TransactionDetail({
  modalVisible,
  setModalVisible,
  selectedTransaction,
}: TransactionDetailProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalHeader}>Transaction Details</Text>
          {selectedTransaction && (
            <View>
              <View style={{ gap: 10, alignItems: 'center', marginTop: 15 }}>
                <Text style={{ fontSize: 14 }}>Amount</Text>
                <Text style={styles.amountText}>
                  {selectedTransaction.amount}
                </Text>
                <Text style={styles.dateText}>{selectedTransaction.time}</Text>
              </View>

              {/* status */}
              <View
                style={[
                  styles.transactionDetails,
                  { paddingTop: 40, borderTopWidth: 1, borderTopColor: '#ddd' },
                ]}
              >
                <Text style={styles.label}>Status</Text>
                <Text style={[styles.value, styles.success]}>
                  {selectedTransaction.status}
                </Text>
              </View>
              {/* Reference No. */}
              <View style={styles.transactionDetails}>
                <Text style={styles.label}>Reference No.</Text>
                <Text style={styles.value}>{selectedTransaction.id}</Text>
              </View>
              {/* To */}
              <View style={styles.transactionDetails}>
                <Text style={styles.label}>To</Text>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={styles.value}>
                    {selectedTransaction.to.name}
                  </Text>
                  <View style={{ flexDirection: 'row', gap: 10 }}>
                    <Text style={styles.value}>
                      {selectedTransaction.to.bank}
                    </Text>
                    <Text style={styles.value}>
                      {selectedTransaction.to.account}
                    </Text>
                  </View>
                </View>
              </View>
              {/* From */}
              <View style={styles.transactionDetails}>
                <Text style={styles.label}>From</Text>
                <Text style={styles.value}>
                  {selectedTransaction.from.name}
                </Text>
              </View>
              {/* When */}
              <View style={styles.transactionDetails}>
                <Text style={styles.label}>When</Text>
                <Text style={styles.value}>{selectedTransaction.date}</Text>
              </View>
              {/* Transfer Type */}
              <View style={styles.transactionDetails}>
                <Text style={styles.label}>Transfer Type</Text>
                <Text style={styles.value}>
                  {selectedTransaction.transferType}
                </Text>
              </View>
              {/* Recipient Reference */}
              <View style={styles.transactionDetails}>
                <Text style={styles.label}>Recipient Reference</Text>
                <Text style={styles.value}>
                  {selectedTransaction.recipientReference}
                </Text>
              </View>
            </View>
          )}

          <View style={styles.bottomButtons}>
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.doneText}>Done</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 4,
  },
  modalContent: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 25,
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  transactionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  amountText: {
    fontSize: 20,
    fontWeight: 'semibold',
    textAlign: 'center',
  },
  dateText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'gray',
    marginBottom: 10,
    paddingBottom: 20,
  },
  label: {
    fontSize: 14,
  },
  value: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
  },
  success: {
    color: 'green',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  shareButton: {
    backgroundColor: '#27ae60',
    padding: 10,
    borderRadius: 50,
  },
  shareText: {
    color: 'white',
    fontSize: 18,
  },
  doneButton: {
    backgroundColor: 'red',
    marginTop: 130,
    padding: 10,
    borderRadius: 5,
    width: '85%',
    alignItems: 'center',
  },
  doneText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
})

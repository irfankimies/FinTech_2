import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  ActivityIndicator,
  RefreshControl,
} from 'react-native'
import transactions from '../data.json'
import TransactionDetail from '../components/TransactionDetails'
import { useAuth } from '@/context/context'
import { useRoute } from '@react-navigation/native'
import Colors from '@/constants/colors'

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
  icon: string
  title: string
}

export default function TransactionHistory() {
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [visibleData, setVisibleData] = useState(transactions.slice(0, 5))
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const { onAuthenticate, setIsAuthenticated, getIcon } = useAuth()
  const route = useRoute()

  useEffect(() => {
    if (route.name === 'index') {
      setPage(1)
      setVisibleData(transactions.slice(0, 5))
      setIsAuthenticated(false)
    }
  }, [route.name])

  const onRefresh = () => {
    setRefreshing(true)
    setVisibleData([])
    setTimeout(() => {
      setPage(1)
      setVisibleData(transactions.slice(0, 5))
      setRefreshing(false)
    }, 2000)
  }

  const loadMoreData = () => {
    if (loading) return
    setLoading(true)
    setTimeout(() => {
      const nextPage = page + 1
      const nextData = transactions.slice(0, nextPage * 5)
      setVisibleData(nextData)
      setPage(nextPage)
      setLoading(false)
    }, 300)
  }

  const renderTransaction = ({ item }: { item: Transaction }) => {
    return (
      <View>
        <Text style={styles.dateHeader}>{item.date}</Text>

        <TouchableOpacity
          style={styles.transactionItem}
          onPress={async () => {
            const selected = transactions.find((t) => t.id === item.id)
            setSelectedTransaction(selected || null)
            await onAuthenticate()
            setModalVisible(true)
          }}
        >
          <View style={styles.leftSection}>
            <Image source={getIcon(item.icon)} style={styles.icon} />
            <View>
              <Text style={styles.transactionTitle}>{item.title}</Text>
              <Text style={styles.transactionDetails}>{item.to.account}</Text>
              <Text style={styles.transactionType}>
                {item.recipientReference}
              </Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            </View>
          </View>
          <Text style={styles.amount}>****</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* Transaction List */}
      <FlatList
        data={visibleData}
        keyExtractor={(item) => item.id}
        renderItem={renderTransaction}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size={'large'} color={'red'} /> : null
        }
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['red']}
            tintColor={'red'}
          />
        }
      />

      {/* Transaction Details Show Modal */}
      <TransactionDetail
        modalVisible={modalVisible}
        selectedTransaction={selectedTransaction}
        setModalVisible={setModalVisible}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  dateHeader: {
    fontSize: 16,
    color: '#666',
    paddingVertical: 5,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GRAY,
    borderStyle: 'dashed',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  transactionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    wordWrap: 'break-word',
    maxWidth: 150,
  },
  transactionDetails: {
    fontSize: 14,
    color: '#666',
  },
  transactionType: {
    fontSize: 12,
    color: Colors.GRAY,
  },
  statusBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
    marginTop: 4,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: Colors.SUCCESS,
  },
  statusText: {
    color: Colors.SUCCESS,
    fontSize: 12,
  },
  amount: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.LIGHT_RED,
  },
})

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
  BackHandler,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import TransactionHistory from '@/screens/TransactionHistory'
import Colors from '@/constants/colors'
import ModalExitApp from '@/components/ModalExitApp'
import { useNavigation } from '@react-navigation/native'



const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation();
  
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', ()=> {
      setModalVisible(true)
      return true
    })
    return () => backHandler.remove()
  }, [])

  const handleExitApp = () => {
    setModalVisible(false)
    navigation.goBack()
  }
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.LIGHT_RED} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Transaction History</Text>
        <TouchableOpacity>
          <Text style={styles.tapToView}>Tab to view</Text>
        </TouchableOpacity>
      </View>
      <TransactionHistory />
      {/* Modal show Exit Apps */}
      <ModalExitApp
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onExit={handleExitApp}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tapToView: {
    color: Colors.LIGHT_RED,
    fontWeight: '600',
  },
})

export default HomeScreen

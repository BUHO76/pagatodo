import { useState, useMemo } from 'react';
import {StyleSheet, 
  View, 
  Text,
  FlatList,
  TextInput,
  Pressable 
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import data from './data.json'
import type { Account } from './src/feature/accounts/types';
import { ALL, filterAccounts} from './src/filterAccounts'
import { store } from './src/store/store' 
import { Provider } from 'react-redux';
import { AccountRow } from './src/components/AccountRow';

const ACCOUNTS: Account[] = data
const ORDER: Order[] = ['saldo', 'reciente']
const ORDER_LABEL = {
  saldo: 'Mayor saldo',
  reciente: 'Más reciente',
};

function App() {

  return (
    <View style={styles.container}>
        <Text>Hola</Text>
    </View>

  );
}

function AccountsScreen() {
  const [query, setQuery] = useState('')
  const [city, setCity] = useState(ALL)
  const [category, setCategory] = useState(ALL)

  return(
    <SafeAreaView>
      <TextInput
      placeholder='Buscar por nombre o ciudad'
      value={query}
      onChangeText={setQuery}
      />
      <Text>Cuentas</Text>
      <FlatList
      data={ACCOUNTS}
      keyExtractor={a => a.id}
      renderItem={({item}) => <AccountRow account={item} />} 
      />
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

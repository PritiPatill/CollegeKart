/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react';
import { searchColleges } from './src/db-query/dbQuery';
import Login from './src/modules/login/Login';
import Registration from './src/modules/registration/Registration';
import AppNavigation from './src/navigation/AppNavigation';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  useEffect(() => {
    // const subscriber = firestore()
    //   .collection('colleges')
    //   .doc('state')
    //   .onSnapshot(documentSnapshot => {
    //     console.log('User data: ', documentSnapshot.data());
    //   });

    // firestore()
    //   .collection('colleges')
    //   .get()
    //   .then(querySnapshot => {
    //     console.log('Total users: ', querySnapshot.size);

    //     querySnapshot.forEach(documentSnapshot => {
    //       console.log(
    //         'User ID: ',
    //         documentSnapshot.id,
    //         documentSnapshot.data(),
    //       );
    //     });
    //   });

    // Stop listening for updates when no longer required
    getData();
  }, []);

  const getData = async () => {
    const data = await searchColleges('MCA');
    console.log('check data: ', data);
  };

  return (
    <View style={styles.container}>
      <AppNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

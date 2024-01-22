// import 'react-native-gesture-handler';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import LoginScreen from './App/Screen/LoginScreen';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { CompleteChapterContext } from './App/Context/CompletedChapterContex';
import { useState } from 'react';
import * as SecureStore from 'expo-secure-store';

const tokenCache = {
  async getToken(key) {
    try{
      return SecureStore.getItemAsync(key);
    }catch(err){
      return null;
    }
  },
  saveToken(key, value) {
    try{
      return SecureStore.setItemAsync(key, value);
    } catch(err){
      return;
    }
  },
};

// const clerkApiKey = process.env.CLERK_EXPO_PUBLISHABLE_KEY;
const clerkApiKey = 'pk_test_dmVyaWZpZWQtc2F3ZmlzaC04OC5jbGVyay5hY2NvdW50cy5kZXYk';

export default function App() {
  const [isChapterComplete, setIsChapterComplete] = useState(false);
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={clerkApiKey} >
      <CompleteChapterContext.Provider value={{isChapterComplete, setIsChapterComplete}}>
        <View style={styles.container}>
          <SignedIn>
            <NavigationContainer>
              <TabNavigation/>
            </NavigationContainer>
          </SignedIn>
          <SignedOut>
            <LoginScreen/>
          </SignedOut>
        </View>
      </CompleteChapterContext.Provider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
  },
});

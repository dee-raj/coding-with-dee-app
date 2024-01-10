// import 'react-native-gesture-handler';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import LoginScreen from './App/Screen/LoginScreen';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';

// const clerkApiKey = process.env.CLERK_EXPO_PUBLISHABLE_KEY;
const clerkApiKey = 'pk_test_dmVyaWZpZWQtc2F3ZmlzaC04OC5jbGVyay5hY2NvdW50cy5kZXYk';

export default function App() {
  return (
    <ClerkProvider publishableKey={clerkApiKey} >
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

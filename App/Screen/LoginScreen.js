import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import logImg from './../../assets/images/loginScreen.png';
import GoogleIcon from './../../assets/images/google-logo.png';
import Colors from '../Utils/Colors';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from './../../hooks/warmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
   useWarmUpBrowser();
   const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

   const onPress = React.useCallback(async () => {
   try {
      const { createdSessionId, signIn, signUp, setActive } =
         await startOAuthFlow();

      if (createdSessionId) {
         setActive({ session: createdSessionId });
      } else {
         // Use signIn or signUp for next steps such as MFA
      }
   } catch (err) {
      console.error("OAuth error", err);
   }
   }, []);
 
  return (
   <View style={{display:'flex', alignItems:'center'}}>
      <Image source={logImg}
         style={{
            width:250, 
            height:500,
            objectFit: 'contain',
            marginTop:50,
         }}
      />
      <View style={{
            height:400,
            width:'100%',
            marginTop:-130,
            padding:20,
            backgroundColor:Colors.primary,
         }}>
         <Text style={{
            textAlign:'center',
            fontSize:37,
            color:Colors.white,
            marginTop:30,
         }}>
            Decoding with Dee
         </Text>
         <Text style={{
            textAlign:'center',
            fontSize:20,
            margin:20,
            color:Colors.light_primary,
         }}>
         Start your coding adventure and unlock your programming potential with Decoding with Dee!
         </Text>
         <TouchableOpacity onPress={onPress} style={{
            backgroundColor:Colors.white,
            display:'flex',
            alignItems:'center',
            flexDirection:'row',
            gap:10,
            justifyContent:'center',
            padding:10,
            borderRadius:60,
            marginTop:20,
            }}
            >
            <Image source={GoogleIcon} style={{
                  width:40, height:40
               }}
            />
            <Text style={{
               fontSize:20,
               color:Colors.primary,
            }}>
            Sign In with Google</Text>
         </TouchableOpacity>
      </View>
   </View>
  )
}
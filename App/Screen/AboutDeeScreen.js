import {
  Button,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View
} from 'react-native';
import React, { useRef, useState } from 'react';
import Colors from '../Utils/Colors';

const BannerSection = () => {
  return (
    <View style={styles.topSectionStyle}>
      <Text style={styles.bannerTitleStyle}>Welcome To</Text>
      <Image style={styles.bannerStyle} source={require('./../../assets/images/banner.png')} />
      <Text style={styles.bannerDescStyle}>Learn to code with confidence and fun. Conquer challenges, build projects, and join a supportive community.</Text>
    </View>
  );
};

const LegalSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ textAlign: 'justify', padding: 10 }}>© {currentYear} Decoding with Dee. All rights reserved. Decoding with Dee is the owner of this app.</Text>
    </View>
  );
};

const ThanksSection = () => {
  return (
    <View style={styles.thanksSectionStyle}>
      <Text style={{
        marginBottom: 2
      }}>Thank You!</Text>
      <Text style={styles.sectionContent}>
        Thank you for being a part of our journey. We're excited to continue providing a comprehensive and engaging learning experience for all.
      </Text>
    </View>
  );
};

const HelpSection = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ textAlign: 'center' }}>Help needed?</Text>
      <View style={{ left: -5, marginTop: 3, height: 1, width: "auto", backgroundColor: "green" }}></View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        left: -5,
        marginVertical: 20
      }}>
        <Text onPress={() => {
          Linking.openURL('https://gemini.google.com/app/2bee44375b54e23b')
        }} style={styles.linkURLStyle}>FAQs</Text>
        <Text onPress={() => {
          Linking.openURL('https://github.com/dee-raj/coding-with-dee-app/blob/main/README.md')
        }} style={styles.linkURLStyle}>User Guides</Text>
        <Text onPress={() => {
          Linking.openURL('https://youtube.com/shorts/aoh43ZiZ0uA?feature=shared')
        }} style={styles.linkURLStyle}>Tutorials</Text>
        <Text onPress={() => {
          Linking.canOpenURL('mailto:support@decodingwithdee.com')
        }} style={styles.linkURLStyle}>Contact Information</Text>
      </View>
    </View>
  );
};


const BottomSection = () => {
  return (
    <View style={styles.bottomSectionStyle}>
      <HelpSection />
      <ThanksSection />
      <LegalSection />
    </View>
  );
};

export default function AboutDeeScreen() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    ToastAndroid.show(`Thanks For your Feedback!`, ToastAndroid.SHORT);
    setFeedback('');
  };

  return (
    <View style={styles.container}>
      <BannerSection />
      <View style={{
        backgroundColor: Colors.white,
        marginTop: 100,
        marginHorizontal: 5,
        borderRadius: 30,
        marginBottom: -90
      }}>
        <TextInput
          value={feedback}
          onChangeText={setFeedback}
          placeholder="Enter your feedback"
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
      <BottomSection />
    </View>
  );
};

const styles = StyleSheet.create({
  topSectionStyle: {
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  bannerTitleStyle: {
    fontFamily: "monospace",
    fontWeight: '700',
    fontSize: 20,
    color: Colors.dark_primary,
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 40
  },
  bannerStyle: {
    width: "97%",
    height: "115%",
    objectFit: 'fill',
  },
  bannerDescStyle: {
    fontFamily: "Roboto",
    fontWeight: '100',
    fontSize: 12,
    color: Colors.dark_primary,
    textAlign: 'center',
    fontStyle: 'italic',
    width: "90%",
  },
  bottomSectionStyle: {
    marginTop: 200,
    height: '89%',
  },
  thanksSectionStyle: {
    backgroundColor: Colors.bgColor,
    alignItems: 'center',
    marginTop: 0
  },
  sectionContent: {
    fontSize: 15,
    color: Colors.dark_primary,
    textAlign: 'justify',
    marginVertical: 15,
    fontFamily: "Roboto",
  },
  middleSectionStyle: {
    marginTop: 70,
    padding: 30,
    backgroundColor: Colors.bgColor
  },
  linkURLStyle: {
    backgroundColor: Colors.light_green,
    opacity: 0.6,
    fontSize: 16,
    padding: 7,
    borderRadius: 10,
    fontSize: 13
  }
});

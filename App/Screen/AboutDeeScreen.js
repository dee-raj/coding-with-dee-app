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
    <View style={{
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
        textAlign: 'justify',
        padding: 9,
        color: '#404',
      }}>2023 - {currentYear} © Decoding with Dee. All rights are reserved. Decoding with Dee is the owner of this app.</Text>
    </View>
  );
};

const ThanksSection = () => {
  return (
    <View style={styles.thanksSectionStyle}>
      <Text style={styles.thanksTitle}>Thank You!</Text>
      <Text style={styles.sectionContent}>
        Thank you for being a part of our journey. We're excited to continue providing a comprehensive and engaging learning experience for all.
      </Text>
    </View>
  );
};

const HelpSection = () => {
  return (
    <View style={styles.helpContainerStyle}>
      <Text style={styles.title}>needed any help?</Text>
      <View style={styles.divider}></View>
      <View style={styles.linksContainer}>
        <Text onPress={() => Linking.openURL('https://gemini.google.com/app/2bee44375b54e23b')} style={styles.linkURLStyle}>FAQs</Text>
        <Text onPress={() => Linking.openURL('https://github.com/dee-raj/coding-with-dee-app/blob/main/README.md')} style={styles.linkURLStyle}>User Guides</Text>
        <Text onPress={() => Linking.openURL('https://youtube.com/shorts/aoh43ZiZ0uA?feature=shared')} style={styles.linkURLStyle}>Tutorials</Text>
        <Text onPress={() => Linking.openURL('mailto:support@decodingwithdee.com')} style={styles.linkURLStyle}>Contact Information</Text>
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
  const feedbackInputRef = useRef(null);

  const isValidFeedback = (input) => {
    const regex = /^[a-zA-Z0-9,.?!🤖👾👽☠️💀👎🤝✌️🙏✍️❤️♥️💔🎁😂🦿🥰😍😡👿👍🗣️👀♟️👩‍💻👨‍💻\s]+$/;
    return regex.test(input);
  };

  const handleSubmit = () => {
    if (isValidFeedback(feedback.trim()) && feedback.trim().length > 1) {
      ToastAndroid.show(`Thanks For your Feedback!`, ToastAndroid.LONG);
      setFeedback('');
      feedbackInputRef.current.blur();
    } else {
      ToastAndroid.show(`please type something`, ToastAndroid.SHORT);
    }
  };

  return (
    <View>
      <BannerSection />
      <View style={styles.feedbackContainer}>
        <TextInput
          ref={feedbackInputRef}
          style={styles.input}
          value={feedback}
          onChangeText={setFeedback}
          placeholder="improve us by your feedback..."
          placeholderTextColor={Colors.gray}
          multiline
        />
        <Button
          title="Submit"
          onPress={handleSubmit}
          color={Colors.dark_primary}
        />
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
    marginTop: 10,
    marginHorizontal: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 2,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
  },
  thanksTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.dark_primary,
    marginBottom: 4,
  },
  sectionContent: {
    fontSize: 16,
    color: Colors.dark_primary,
    textAlign: 'justify',
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    paddingHorizontal: 11
  },
  middleSectionStyle: {
    marginTop: 70,
    padding: 30,
    backgroundColor: Colors.bgColor
  },
  helpContainerStyle: {
    padding: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    left: -5,
    marginTop: 3,
    height: 3,
    width: "100%",
    backgroundColor: Colors.green,
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 2,
    left: -5,
    marginBottom: 5,
  },
  linkURLStyle: {
    backgroundColor: Colors.light_green,
    opacity: 0.6,
    fontSize: 16,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 13,
    textAlign: 'center',
  },
  feedbackContainer: {
    backgroundColor: Colors.white,
    marginTop: 100,
    marginHorizontal: 20,
    borderRadius: 30,
    marginBottom: -160,
    padding: 20,
    shadowColor: '#0fa',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.37,
    shadowRadius: 4.65,
    elevation: 6,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark_primary,
    marginBottom: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: Colors.black,
  },
});

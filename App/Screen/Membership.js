import React, { useContext, useEffect, useRef, useState } from 'react';
import {
   View,
   Text,
   TouchableOpacity,
   StyleSheet,
   ToastAndroid,
   TextInput,
   KeyboardAvoidingView,
   Platform,
   ImageBackground
} from 'react-native';
import Colors from '../Utils/Colors';

import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { enrollCourse, getUserEnrolledCourse } from '../Services';
import { useUser } from '@clerk/clerk-expo';
import { CompleteChapterContext } from '../Context/CompletedChapterContex';

export default function PaymentDemo() {
   const navigation = useNavigation();
   const params = useRoute().params;
   const [setUserEnrolledCourse] = useState([]);
   const { user } = useUser();
   const { isChapterComplete } = useContext(CompleteChapterContext);

   const [cardNumber, setCardNumber] = useState('');
   const [expDate, setExpDate] = useState('');
   const [cvc, setCVC] = useState('');
   const [validationError, setValidationError] = useState({
      cardNumber: '',
      expDate: '',
      cvc: '',
   });
   const InputRef = useRef(null);

   useEffect(() => {
      if (user && params.course) {
         GetUserEnrolledCourses();
      }
   }, [params.course, user]);

   useEffect(() => {
      isChapterComplete && GetUserEnrolledCourses();
   }, [isChapterComplete]);

   const validatePaymentDetails = () => {
      const cardNumberPattern = /^4111\s?1111\s?1111\s?1111$/;
      const futureDate = new Date();
      futureDate.setFullYear(futureDate.getFullYear());
      const cvcPattern = /^\w{4}$/;

      let isValid = true;
      const errors = {
         cardNumber: '',
         expDate: '',
         cvc: '',
      };

      if (!cardNumberPattern.test(cardNumber.replace(/\s/g, ''))) {
         errors.cardNumber = 'Invalid card number try 4111 1111 1111 1111';
         isValid = false;
      }

      const [month, year] = expDate.split('/');
      const expDateObj = new Date(`${year}-${month}-01`);

      if (!expDate || expDateObj < futureDate) {
         errors.expDate = 'Invalid expiration date';
         isValid = false;
      }

      if (!cvcPattern.test(cvc)) {
         errors.cvc = 'Invalid CVC number';
         isValid = false;
      }

      setValidationError(errors);
      return isValid;
   };

   const UserEnrollCourse = () => {
      enrollCourse(params.course.id, user.primaryEmailAddress.emailAddress)
         .then(res => {
            if (res) {
               ToastAndroid.show("Course Enrolled successfully!", ToastAndroid.LONG);
               GetUserEnrolledCourses();
            }
         });
   };

   const GetUserEnrolledCourses = () => {
      getUserEnrolledCourse(params.course.id, user.primaryEmailAddress.emailAddress)
         .then(res => {
            setUserEnrolledCourse(res.userEnrolledCourses);
         });
   };

   const handlePayment = () => {
      if (validatePaymentDetails()) {
         InputRef.current.blur();
         UserEnrollCourse();
         ToastAndroid.show("Payment successful!", ToastAndroid.SHORT);
         navigation.goBack();
      }
   };

   return (
      <ImageBackground
         source={require('./../../assets/de-coding-logo.png')} // Replace with the actual path to your image
         style={styles.backgroundImage}
      >
         <View style={styles.topStyle}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
               <FontAwesome5 name="arrow-circle-left" size={35} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Payment Gateway</Text>
         </View>
         <View style={styles.container}>
            <Text style={{ ...styles.title, color: Colors.dark_primary }}>Please Enter Your Details</Text>
            <TextInput
               ref={InputRef}
               style={[styles.input, validationError.cardNumber && styles.inputError]}
               placeholder="Card Number"
               maxLength={16}
               keyboardType="numeric"
               value={cardNumber}
               onChangeText={(value) => setCardNumber(value)}
            />
            {validationError.cardNumber ? <Text style={styles.errorText}>{validationError.cardNumber}</Text> : null}
            <TextInput
               style={[styles.input, validationError.expDate && styles.inputError]}
               placeholder="Expiration Date (MM/YYYY)"
               maxLength={7}
               value={expDate}
               onChangeText={setExpDate}
            />
            {validationError.expDate ? <Text style={styles.errorText}>{validationError.expDate}</Text> : null}
            <TextInput
               style={[styles.input, validationError.cvc && styles.inputError]}
               placeholder="CVC"
               maxLength={4}
               value={cvc}
               onChangeText={setCVC}
            />
            {validationError.cvc ? <Text style={styles.errorText}>{validationError.cvc}</Text> : null}
            <TouchableOpacity onPress={handlePayment} style={styles.paymentButton}>
               <Text style={styles.paymentButtonText}>make payment of Rs {params.course?.price} now</Text>
            </TouchableOpacity>
         </View>
      </ImageBackground>
   );
}

const styles = StyleSheet.create({
   container: {
      marginTop: 70,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.bgColor,
      padding: 20,
      borderRadius: 10,
      margin: 10
   },
   title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: Colors.light_green,
   },
   input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 8,
      paddingLeft: 10,
      width: '100%',
   },
   inputError: {
      borderColor: 'red',
   },
   errorText: {
      color: 'red',
      marginBottom: 8,
   },
   paymentButton: {
      backgroundColor: Colors.dark_primary,
      padding: 15,
      borderRadius: 10,
      marginTop: 30,
   },
   paymentButtonText: {
      color: Colors.white,
      fontSize: 18,
      textAlign: 'center',
   },
   backButton: {
      top: 5,
      left: 5,
      position: 'absolute',
      padding: 5,
      borderRadius: 40,
      backgroundColor: Colors.gray,
   },
   topStyle: {
      margin: 10,
      height: 60,
      backgroundColor: Colors.gray,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20
   },
   backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
   },
});

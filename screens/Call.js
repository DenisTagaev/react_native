import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useRef } from 'react';
import PhoneInput from 'react-native-phone-input';
import call from "react-native-phone-call";
import Navbar from '../navigation/navbar';
import styles from "../stylesheets/styles";


const Call = ({ navigation }) => {
  const phone = useRef('');

  takeCall = () => {
    const args = {
      number: `${phone.current}`, // String value with the number to call
      prompt: true, // Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };  
    
    call(args).catch(console.error);
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.phoneContainer}>
        <Text style={[styles.info, { textAlign: "left" }]}>Instructions</Text>
        <Text style={[styles.generated, { marginBottom: 20 }]}>
          1.Click on the flag to chose the country{`\n`}
          2.Click near the country code area to input the phone{`\n`}
          3.Click the button to make a call
        </Text>
        <Text style={styles.info}>You would like to call to:</Text>
        <PhoneInput
          ref={phone}
          initialCountry={"ca"}
          textStyle={{
            fontWeight: "bold",
            fontSize: 16,
            color: "#395481",
            paddingBottom: 1,
            borderBottomWidth: 1,
          }}
          offset={12}
          textProps={{ minLength: 11, maxLength: 13 }}
          flagStyle={{
            width: 40,
            height: 30,
            borderWidth: 2,
            borderColor: "#395481",
          }}
          pickerItemStyle={{
            fontWeight: "bold",
          }}
          onChangePhoneNumber={((value) => phone.current = value)}
        />
        <View
          style={[
            styles.buttonContainer,
            { width: "100%", justifyContent: "flex-end" },
          ]}
        >
          <TouchableOpacity style={styles.button} onPress={takeCall}>
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Navbar navigation={navigation} />
    </KeyboardAvoidingView>
  );
}

export default Call
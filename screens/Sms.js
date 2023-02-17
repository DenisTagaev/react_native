import React, { useState } from "react";
import { Alert, View, Text, TextInput, Button, KeyboardAvoidingView} from "react-native";
import * as SMS from "expo-sms";
import Navbar from "../navigation/navbar";
import styles from "../stylesheets/styles";

const Sms = ({ navigation }) => {
  const [message, setMessage] = useState({ recipient: "", text: "" });

  const closeMessageHandler = () => {
    setMessage({ recipient: "", text: "" });
  };

  sendMessageWithSMS = async () => {
    const isAvailable = await SMS.isAvailableAsync();

    if (isAvailable) {
      try {
        Alert.alert(`Message to ${message.recipient} is composed`);
        const { result } = await SMS.sendSMSAsync(
          message.recipient,
          message.text
        );
        closeMessageHandler();
      } catch (e) {
        console.error(e);
      }
    } else {
      Alert.alert(`${message.recipient} is not available`);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.infoContainer}>
        <Text style={styles.info}>You want to send the following:</Text>
        <Text style={styles.generated}>
          Send message to: {message.recipient}
        </Text>
        <Text style={styles.generated}>Your text is: {message.text}</Text>
      </View>
      <View>
        <Text>Contact:</Text>
        <TextInput
          style={styles.textInput}
          value={message.recipient}
          onChangeText={(value) =>
            setMessage((message) => ({ ...message, recipient: value }))
          }
          placeholder="Please enter your recipient's number"
        />
        <Text>Message:</Text>
        <TextInput
          style={styles.textInput}
          value={message.text}
          multiline
          numberOfLines={5}
          onChangeText={(value) =>
            setMessage((message) => ({ ...message, text: value }))
          }
          placeholder="Please enter your message here..."
        />
      </View>
      <View>
        <Button
          color="#395481"
          title="Send SMS"
          onPress={sendMessageWithSMS}
        ></Button>
      </View>
      <Navbar  navigation={navigation} />
    </KeyboardAvoidingView>
  );
};

export default Sms;
import { View } from 'react-native';
import React from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "../stylesheets/styles";

const Navbar = ({ navigation }) => {
  return (
    <View style={styles.navContainer}>
      <View style={styles.navigation}>
        <Icon.Button
          style={styles.navButton}
          name="phone"
          size={24}
          onPress={() => navigation.replace("Call")}
        >
          Phone
        </Icon.Button>
        <Icon.Button
          style={styles.navButton}
          name="contact-page"
          size={24}
          onPress={() => navigation.replace("ContactList")}
        >
          Contacts
        </Icon.Button>
        <Icon.Button
          style={styles.navButton}
          name="message"
          size={24}
          onPress={() => navigation.replace("Sms")}
        >
          Message
        </Icon.Button>
      </View>
    </View>
  );
};

export default Navbar;

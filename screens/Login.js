import { Text, 
   TextInput, 
   View, 
   KeyboardAvoidingView, 
   TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "../stylesheets/styles";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from '../firebase';

const Login = ({ navigation }) => {

  const [data, setData] = useState({email: '', password: ''});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        navigation.replace("ContactList");
      }
    });
    return unsubscribe;
  }, [])

  const handleSignup = () => {
      createUserWithEmailAndPassword(auth, data.email, data.password)
          .then((userCredential) => {
              //signed up
              const user = userCredential.user;
              Alert.alert("Welcome to the phone simulator!", `You are now Signed Up with ${user.email} email`);
              setData({email: '', password: ''});
          })
          .catch(err => console.error(err));
  }
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Alert.alert("Welcome to the phone simulator!", `You are now Signed In with ${user.email} email`);
        if(!user) {
          Alert.alert("Please Sign Up first");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        Alert.alert("Wrong User Credentials");
      });
  }
    return (
      <KeyboardAvoidingView style={styles.form} behavior="height">
        <View style={styles.loginContainer}>
          <TextInput
            placeholder="Email"
            value={data.email}
            onChangeText={(text) =>
              setData((data) => ({ ...data, email: text.trim()}))
            }
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={data.password}
            onChangeText={(value) =>
              setData((data) => ({ ...data, password: value}))
            }
            secureTextEntry
            style={styles.input}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleLogin}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignup}
            style={[styles.button, styles.btnOutline]}
          >
            <Text style={[styles.buttonText, styles.btnOutlineText]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
}

export default Login;
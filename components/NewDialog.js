import { TextInput } from 'react-native';
import React, { useState }from 'react';
import Dialog from "react-native-dialog";
import styles from "../stylesheets/styles";
export default function NewDialogBox(props) {
  const [newContact, setNewContact] = useState({name: '', number: ''});

  const createContact = () => {
    props.onDataSuccess(newContact);
    setNewContact({name: '', number: ''});
    props.onCancel();
  }

  return (
    <Dialog.Container visible={props.visible} onBackdropPress={props.onCancel}>
      <Dialog.Title>New Contact</Dialog.Title>
      <Dialog.Description>
        Please enter contact data in boxes below:
      </Dialog.Description>
      <TextInput
        style={styles.textInput}
        placeholder="Name"
        onChangeText={(value) =>
          setNewContact((newContact) => ({ ...newContact, name: value }))
        }
      />
      <TextInput
        style={styles.textInput}
        placeholder="Number"
        keyboardType='numeric'
        onChangeText={(value) =>
          setNewContact((newContact) => ({ ...newContact, number: value }))
        }
      />
      <Dialog.Button
        style={{backgroundColor: '#395481',borderWidth: 1, color: '#fff', borderRadius: 5}}
        label="Create"
        onPress={createContact}
      />
    </Dialog.Container>
  );
}
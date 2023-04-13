import { TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import Dialog from "react-native-dialog";
import styles from "../stylesheets/styles";

export default function EditDialogBox(props) {
  const [editedContact, setEditedContact] = useState({ 
    id:"", 
    name: "", 
    number: "" 
  });

  useEffect(() => {
    setEditedContact(props.toUpdate);
  }, [props.toUpdate]);

  const editContact = () => {
    props.onUpdateSuccess(editedContact);
    setEditedContact({
      id:"", 
      name: "", 
      number: "" 
    });
    props.onCancel();
  };

  return (
    <Dialog.Container visible={props.visible} onBackdropPress={props.onCancel}>
      <Dialog.Title>Edit Contact</Dialog.Title>
      <Dialog.Description>
        You can change contact data in boxes below:
      </Dialog.Description>
      <TextInput
        style={styles.textInput}
        placeholder="Name"
        value={editedContact.name}
        onChangeText={(value) =>
          setEditedContact((editedContact) => ({
            ...editedContact,
            name: value,
          }))
        }
      />
      <TextInput
        style={styles.textInput}
        placeholder="Number"
        keyboardType="numeric"
        value={editedContact.number}
        onChangeText={(value) =>
          setEditedContact((editedContact) => ({
            ...editedContact,
            number: value,
          }))
        }
      />
      <Dialog.Button
        style={{
          backgroundColor: "#395481",
          borderWidth: 1,
          color: "#fff",
          borderRadius: 5,
        }}
        label="Save"
        onPress={editContact}
      />
    </Dialog.Container>
  );
}
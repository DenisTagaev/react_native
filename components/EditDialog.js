import { TextInput } from "react-native";
import React, { useState } from "react";
import Dialog from "react-native-dialog";
import styles from "../stylesheets/styles";

export default function DialogBox(props) {
  const [editedContact, setEditedContact] = useState({ name: "", number: "" });

  const editContact = () => {
    props.onDataSuccess(editedContact);
    setEditedContact({ name: "", number: "" });
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
        onChangeText={(value) =>
          setEditedContact((editedContact) => ({ ...editedContact, name: value }))
        }
      />
      <TextInput
        style={styles.textInput}
        placeholder="Number"
        keyboardType="numeric"
        onChangeText={(value) =>
          setEditedContact((editedContact) => ({ ...editedContact, number: value }))
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
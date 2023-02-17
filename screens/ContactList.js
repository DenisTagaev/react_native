import { Alert, Text, View, SectionList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";
import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc } from '@firebase/firestore';
import { db } from "../firebase";
import Navbar from '../navigation/navbar';
import styles from "../stylesheets/styles";
import DialogBox from '../components/NewDialog';

const ContactList = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const contactsCollection = collection(db, 'contacts');

  useEffect(()=>{
    const getContacts = async() => {
      const data = await getDocs(contactsCollection)
        .catch(err => console.error(err));
      setContacts(data.docs.map((doc) => 
          ({...doc.data(), id: doc.id}) ));
    };

    getContacts();
  }, []);

  const newContactHandler = async(contact) => {
    await addDoc(contactsCollection, contact)
      .then(Alert.alert('You added new contact!'))
      .catch(err => console.error(err));
    navigation.replace('ContactList');
  }

  const deleteContact = async(id) => {
    const contactDoc = doc(db, "contacts", id);
    await deleteDoc(contactDoc)
      .then(Alert.alert("You deleted contact!"))
      .catch(err => console.error(err));
    navigation.replace("ContactList");
  }

  const editContact = async (id) => {
    const contactDoc = doc(db, "contacts", id);
    await updateDoc(contactDoc)
      .then(Alert.alert("You deleted contact!"))
      .catch((err) => console.error(err));
    navigation.replace("ContactList");
  };
  
  const getContacts = () => {
    let contactArr = [];
    let charCode = "A".charCodeAt(0);

    for (let i = 0; i < 26; i++) {
      let currentChar = String.fromCharCode(charCode + i);
      let object = {
        title: currentChar
      };

      let currentContact = contacts.filter(item => {
        return item.name[0].toUpperCase() === currentChar;
      });

      if (currentContact.length > 0) {
        currentContact.sort((a, b) => a.name.localeCompare(b.name));
        object.data = currentContact;
        contactArr.push(object);
      }
    }
    return contactArr;
  }

  return (
    <View style={styles.container}>
      <SectionList
        // style={{maxHeight: '85%'}}
        sections={getContacts()}
        ListHeaderComponent={() => (
          <Icon.Button
            style={[styles.navButton, { borderBottomWidth: 0 }]}
            name="person-add"
            size={24}
            onPress={() => setIsOpen(true)}
          >
            Add Contact
          </Icon.Button>
        )}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>
              {item.name}
              {`\n`}
              {item.number}
            </Text>
            <View>
              <Icon.Button
                style={{
                  backgroundColor: "#395481",
                  paddingLeft: 14,
                  paddingVertical: 9,
                  // color: "transparent",
                }}
                name="delete"
                size={22}
                onPress={() => deleteContact(item.id)}
              />
              <Icon.Button
                style={{
                  backgroundColor: "#395481",
                  paddingLeft: 14,
                  paddingVertical: 9,
                  // color: "transparent",
                }}
                name="edit"
                size={22}
                onPress={() => editContact(item.id)}
                />
            </View>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text>{section.title}</Text>
          </View>
        )}
      />
      <DialogBox
        visible={isOpen}
        onDataSuccess={newContactHandler}
        onCancel={() => setIsOpen(false)}
      />
      <Navbar navigation={navigation} />
    </View>
  );
}

export default ContactList;
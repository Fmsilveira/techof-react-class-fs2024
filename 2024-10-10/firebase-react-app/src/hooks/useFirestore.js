import { useEffect, useState } from 'react';
import {
  collection,
  onSnapshot,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';

import db from '../firebase';

export default function useFirestore(collectionName) {
  const [users, setUsers] = useState([]);

  const collectionRef = collection(db, collectionName);

  // Realtime Get Function
  useEffect(() => {

    const unsubscribe = onSnapshot(
      query(collectionRef),
      (querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setUsers(items);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const addDocument = async (data) => {
    try {
      await addDoc(collectionRef, data);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const queryByName = async (name) => {
    try {
      const q = query(collectionRef, where('name', '==', name));
      const querySnapshot = await getDocs(q);
      const results = [];
      querySnapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data()
        });
      });
      return results;
    } catch (error) {
      console.error('Error querying documents: ', error);
      return [];
    }
  };

  async function updateDocument(docId, data) {
    const docRef = doc(db, collectionName, docId);

    const updatedData = {
      name: data.name,
      age: data.age,
      hasDog: data.hasDog
    };

    try {
      // Update the document in Firestore
      await updateDoc(docRef, updatedData);
      console.log("Document updated successfully!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }

  async function deleteDocument(docId) {
    const docRef = doc(db, collectionName, docId);

    try {
      await deleteDoc(docRef);
      console.log("Document deleted successfully!");
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  }

  return { 
    users,
    setUsers,
    addDocument,
    queryByName,
    updateDocument,
    deleteDocument,
  };
}

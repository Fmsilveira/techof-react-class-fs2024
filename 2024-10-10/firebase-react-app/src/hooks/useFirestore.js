import { useEffect, useState } from 'react';
import {
  collection,
  onSnapshot,
  addDoc,
  query
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

  return [users, setUsers];
}

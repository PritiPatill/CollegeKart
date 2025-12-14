import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export const searchColleges = async keyword => {
  const snapshot = await getDocs(collection(db, 'colleges'));

  const results = snapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .filter(
      item =>
        item.courses &&
        item.courses.toUpperCase().includes(keyword.toUpperCase()),
    );

  return results;
};

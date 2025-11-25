import { db } from "@/app/utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// users collection --> userId document --> items subcollection --> itemId document
const getItems = async (userId) => {
  const itemsCol = collection(db, "users", userId, "items");
  const itemsSnapshot = await getDocs(itemsCol);
  const itemsList = itemsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return itemsList;
};

const addItem = async (userId, item) => {
  const itemsCol = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsCol, item);
  return { id: docRef.id, ...item };
};

export { getItems, addItem };

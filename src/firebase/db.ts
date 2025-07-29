import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { app } from "./firebaseApp";

const db = getFirestore(app);

export const getAllProducts = async () => {
  const snapshot = await getDocs(collection(db, "products"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addProduct = async (product: any) => {
  await addDoc(collection(db, "products"), product);
};
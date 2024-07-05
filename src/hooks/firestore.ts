import { db } from "../firebase"
import {
  collection,
  setDoc,
  addDoc,
  doc,
  serverTimestamp,
  DocumentData,
  DocumentReference,
  FieldValue,
} from "firebase/firestore"

// For adding NEW docs.
// DO NOT use for updating docs unless you specify a docId.
//TO Address: async in ChatGPT
export const postDoc = async (
  collectionName: string,
  docData: DocumentData,
  docId?: string
): Promise<void | DocumentReference<DocumentData>> => {
  // For if we provide a custom docId
  if (docId) {
    return setDoc(doc(db, collectionName, docId), docData)
    // If we did not provide a custom docId, we just reference a collection and
    // when the doc is added, it will be generated with a random Id.
  } else {
    return addDoc(collection(db, collectionName), docData)
  }
}

// Returns current firestore serverTimestamp (unlike regular firebase firestore Timestamp,
// it cannot be read or converted to a date until it is fetched back from firestore)
export const getFirestoreTimestamp = (): FieldValue => {
  return serverTimestamp()
}

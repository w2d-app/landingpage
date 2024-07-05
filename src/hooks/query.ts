import { useMutation } from "@tanstack/react-query"
import { DocumentData, DocumentReference } from "firebase/firestore"
import { getFirestoreTimestamp, postDoc } from "./firestore"

export const usePostEmailList = () => {
  return useMutation<void | DocumentReference<DocumentData>, Error, string>({
    mutationFn: (email: string) =>
      postDoc("emailList", {
        subscribedAt: getFirestoreTimestamp(),
        email: email,
      }),
  })
}

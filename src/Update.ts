import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { Database } from "./Firebase/FirebaseIndex"

const addElementToArray = async () => {
  const washingtonRef = doc(Database, "cities", "DC")
  await updateDoc(washingtonRef, {
    regions: arrayUnion("greater_virginia")
  })
}
addElementToArray()
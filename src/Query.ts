import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { City, cityConverter } from "./entities/City";

import { Database } from "./Firebase/FirebaseIndex";
import { CityOnDatabase } from "./Firebase/types/CityOnDatabase";

const querySingleDoc = async function () {
  const docSnap = await getDoc(doc(Database, "cities", "SF"));
  if (docSnap.exists()) {
    console.log(`Document data:`, docSnap.data());
  } else {
    // doc.data() == undefined
    console.log("No such document");
  }
};

const queryCustomSingleDoc = async () => {
  const docRef = doc(Database, "cities", "LA").withConverter(cityConverter);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const city = docSnap.data();
    console.log(city.toString());
  } else {
    console.log("No such document!");
  }
};

const queryMultipleDocs = async () => {
  const docsLocal = collection(Database, "cities")
  const docsFilter = where("capital", "==", true)

  const querySnapshot = await getDocs(query(docsLocal,docsFilter)) as QuerySnapshot<CityOnDatabase>;
  querySnapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
};
queryMultipleDocs()
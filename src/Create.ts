import { doc, DocumentReference, setDoc } from "firebase/firestore";
import { Database } from "./Firebase/FirebaseIndex";
interface CityOnDatabase {
  capital: boolean;
  country: string;
  name: string;
  population: number;
  state: string | null;
  regions: string[];
}

const setDocOnDatabase = async () => {
  await setDoc(doc(Database, "cities","LA"), {capital:false}, {merge:true})
};
setDocOnDatabase()
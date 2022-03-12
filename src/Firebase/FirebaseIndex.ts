import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {firebaseCredentials} from '../../firebase.config.json'

const app = initializeApp(firebaseCredentials);
const Database = getFirestore();
export { app, Database };

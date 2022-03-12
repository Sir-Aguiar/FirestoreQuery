import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {FirebaseConfig} from '../../firebase.config.json'

const app = initializeApp(FirebaseConfig);
const Database = getFirestore();
export { app, Database };

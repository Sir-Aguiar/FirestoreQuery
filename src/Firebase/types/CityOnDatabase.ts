import {
  collection,
  doc,
  FirestoreDataConverter,
  getDoc,
  getDocs,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import { Database } from "../FirebaseIndex";

export class CityModel {
  public capital: boolean;
  public country: string;
  public name: string;
  public population: number;
  public state: string | null;
  public regions: string[];
  constructor(props: CityModel) {
    this.capital = props.capital;
    this.name = props.name;
    this.country = props.country;
    this.population = props.population;
    this.state = props.state;
    this.regions = props.regions;
  }
  public translateInfos(): string {
    return `Cidade: ${this.name}, Estado: ${this.state || "Nenhum"}, País: ${this.country}. População: ${
      this.population
    }, Região: ${this.regions} `;
  }
}
const CityModelConverter: FirestoreDataConverter<CityModel> = {
  toFirestore: (city: CityModel) => {
    return {
      name: city.name,
      country: city.country,
      state: city.state,
      population: city.population,
      regions: city.regions,
      capital: city.capital,
    };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<CityModel>, options) => {
    const formatedData = snapshot.data(options);
    return new CityModel(formatedData);
  },
};

const formatData = async () => {
  const doctoget = await getDoc(doc(collection(Database, "cities"), "LA").withConverter(CityModelConverter));
  console.log(doctoget.data()?.translateInfos());
  const docstoget = await getDocs(collection(Database, "cities").withConverter(CityModelConverter));
  docstoget.forEach((snap) => {
    console.log(snap.data().translateInfos());
  });
};
formatData();

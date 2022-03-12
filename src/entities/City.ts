import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";

class City{
  constructor(
    public name: string,
    public state: string,
    public country: string
  ) {}
  public toString(): string {
    return `${this.name},${this.state},${this.country}`;
  }
}
const cityConverter:FirestoreDataConverter<City> = {
  toFirestore: (city: City) => {
    return {
      name: city.name,
      state: city.state,
      country: city.country
    };
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot<City>,
    options: SnapshotOptions
  ) => {
    const data = snapshot.data(options);
    return new City(data.name, data.state, data.country);
  },
};
export { City, cityConverter };

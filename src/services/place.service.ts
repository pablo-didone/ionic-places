import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { IPlace } from "../models/place.model";
import { Observable } from "rxjs";

@Injectable()
export class PlaceService {
  constructor(private afDB: AngularFireDatabase) { }

  getPlaces(): Observable<IPlace[]> {
    return this.afDB
      .list<IPlace>('/places/')
      .valueChanges();
  }

  getPlace(placeId) {
    return this.afDB.object(`/places/${placeId}`);
  }

  addUpdatePlace(place: IPlace): Promise<IPlace> {
    return this.afDB.database.ref(`/places/${place.id}`).set(place);
  }

  deletePlace(place: IPlace) {
    return this.afDB.database.ref(`/places/${place.id}`).remove();
  }
}
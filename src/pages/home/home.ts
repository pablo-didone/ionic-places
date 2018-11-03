import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { PlacePage } from '../place/place';
import { IPlace } from '../../models/place.model';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places: IPlace[] = [];

  constructor(
    public navCtrl: NavController,
    private placeService: PlaceService,
    private alertCtrl: AlertController
  ) {
    this.getPlaces();
  }

  getPlaces() {
   this.placeService
    .getPlaces()
    .subscribe(places => this.places = places);
  }

  addEditPlace(place?: IPlace) {
    this.navCtrl.push(PlacePage, { place });
  }

  deletePlace(place: IPlace) {
    const confirm = this.alertCtrl.create({
      title: 'Delete Place',
      message: 'This action will remove this place',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Remove',
          handler: () => {
            this.placeService.deletePlace(place);
          }
        }
      ]
    });

    confirm.present();
  }

}

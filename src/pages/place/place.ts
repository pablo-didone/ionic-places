import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThirdPage } from '../third/third';
import { IPlace } from '../../models/place.model';
import { PlaceService } from '../../services/place.service';

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  place: IPlace;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private placeService: PlaceService
  ) {
    this.place = navParams.get('place') || {
      id: Date.now(),
      name: '',
      address: '',
      type: 'inside'
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  save() {
    this.placeService.addUpdatePlace(this.place)
      .then(() => this.navCtrl.pop());
  }

  get saveEnabled(): boolean {
    return this.place.name.length > 0 && this.place.address.length > 0;
  }

}

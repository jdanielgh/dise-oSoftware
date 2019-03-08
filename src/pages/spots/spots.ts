import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {TripDetailPage} from "../trip-detail/trip-detail";

@Component({
  selector: 'page-trips',
  templateUrl: 'spots.html'
})
export class SpotsPage {
  // list of spots
  public spots: any;

  constructor(public nav: NavController, public tripService: TripService) {
    // set sample data
    this.spots = tripService.getAll();
  }

  // view trip detail
  viewDetail(id) {
    this.nav.push(TripDetailPage, {id: id});
  }
}

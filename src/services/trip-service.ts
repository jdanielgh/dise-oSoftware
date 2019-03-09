import {Injectable} from "@angular/core";
import {SPOTS} from "./mock-trips";

@Injectable()
export class TripService {
  private spots: any;

  constructor() {
    this.spots = SPOTS;
  }

  getAll() {
    return this.spots;
  }

  getItem(id) {
    for (var i = 0; i < this.spots.length; i++) {
      if (this.spots[i].codigo === parseInt(id)) {
        return this.spots[i];
      }
    }
    return null;
  }

  remove(item) {
    this.spots.splice(this.spots.indexOf(item), 1);
  }
}

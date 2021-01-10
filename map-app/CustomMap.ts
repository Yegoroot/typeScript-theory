import {User} from './User'
import {Company} from './Company'

/**
 * Instructions to every other class
 * on how they can be an argument to 'addMarker'
 */

interface Mappable {
  location: {
    lat: number
    lng: number
  }
  markerContent(): string
}

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId),{
      zoom: 1,
     center: {
       lat: 0,
       lng: 0
     },
    })


  
  
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })

    const infowindow = new google.maps.InfoWindow({
      content: mappable.markerContent(),
    });
    marker.addListener("click", () => {
      infowindow.open(this.googleMap, marker);
    });
  }

}

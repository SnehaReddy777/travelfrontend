import { Component, OnInit,ViewChild } from '@angular/core';
import {AgmMap, MouseEvent,MapsAPILoader  } from '@agm/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @ViewChild(AgmMap,{static: true}) public agmMap: AgmMap;
  zoom
  lat
  lng
  getAddress
  longitude
  latitude
  currentLocation:string;
    router: any;
  constructor(private apiloader: MapsAPILoader) { }

  ngOnInit(): void {
    this.get()  
    this.agmMap.triggerResize(true);  
     this.zoom = 16; 
  }
  get() {  
    if (navigator.geolocation) {  
        navigator.geolocation.getCurrentPosition((position: Position) => {  
            if (position) {  
                this.lat = position.coords.latitude;  
                this.lng = position.coords.longitude;  
                this.getAddress = (this.lat, this.lng)  
                console.log(position)  
                this.apiloader.load().then(() => {  
                    let geocoder = new google.maps.Geocoder;  
                    let latlng = {  
                        lat: this.lat,  
                        lng: this.lng  
                    };  
                    geocoder.geocode({  
                        'location': latlng  
                    }, function(results) {  
                        if (results[0]) {  
                            this.currentLocation = results[0].formatted_address;  
                            console.log(this.assgin);  
                        } else {  
                            console.log('Not found');  
                        }  
                    });  
                });  
            }  
        })  
    }  
}
mapClicked($event: MouseEvent) {  
  this.latitude = $event.coords.lat,  
      this.longitude = $event.coords.lng  
  this.apiloader.load().then(() => {  
      let geocoder = new google.maps.Geocoder;  
      let latlng = {  
          lat: this.latitude,  
          lng: this.longitude  
      };  
      geocoder.geocode({  
          'location': latlng  
      }, function(results) {  
          if (results[0]) {  
              this.currentLocation = results[0].formatted_address;  
              console.log(this.currentLocation);  
          } else {  
              console.log('Not found');  
          }  
      });  
  });  
} 
booking(){
    // console.log(this.placename1)
    // this.dataservice.setdata(this.placename1)
    this.router.navigate(['/place'])
    }
}

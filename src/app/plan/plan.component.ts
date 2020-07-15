
import {Title} from '@angular/platform-browser';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Location, Appearance, GermanAddress} from '@angular-material-extensions/google-maps-autocomplete';

// import PlaceResult = google.maps.places.PlaceResult;

//app.component.ts
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NumberValueAccessor, FormControl } from '@angular/forms';
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],

})
export class PlanComponent implements OnInit {
  // title='map'
  // @ViewChild('search')
  // public searchElementRef: ElementRef;

  // public zoom:number;
  // public latitude:number;
  // public longitude:number;
  // public latlongs:any=[];
  // public latlong:any=[];
  // public searchControl:FormControl


  constructor(
   
  ) { }
 

  ngOnInit() {
// this.zoom=8;
// this.latitude=39.8282,
// this.longitude=-98.5795

// this.searchControl=new FormControl()
// this.mapsAPILoader.load().then(()=>{
//   const autocomplete= new google.maps.places.Autocomplete(this.searchElementRef.nativeElement,{
//     types:[],
//     componentRestrictions:{'country':'IN'}
//   })
//   autocomplete.addListener('place changed',()=>{
//     this.ngZone.run(()=>{
//       const place:google.maps.places.PlaceResult=autocomplete.getPlace();
//       if(place.geometry===undefined||place.geometry===null){
//         return;
//       }
//       const latlong={
//         latitude:place.geometry.location.lat,
//         longitude:place.geometry.location.lng
//       }
//       this.latlongs.push(latlong)
//       this.searchControl.reset()
//     })
//   })
// })
  }
  
 
  // private setCurrentLocation() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 8;
      
  //     });
  //   }
  // }

 
}

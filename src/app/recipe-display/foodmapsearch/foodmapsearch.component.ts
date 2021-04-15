import { Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';

import {GeolocationService} from '@ng-web-apis/geolocation';

import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-foodmapsearch',
  templateUrl: './foodmapsearch.component.html',
  styleUrls: ['./foodmapsearch.component.css']
})
export class FoodmapsearchComponent implements OnInit,OnDestroy {
  geoCoder: google.maps.Geocoder;
  mapsAPILoader: MapsAPILoader;
  gelocationsubscription:Subscription;
////not yet included
  
  constructor(private readonly geolocation$: GeolocationService, private _ngZone: NgZone) {    
  }
  ngOnDestroy(): void {
    
  }

  @ViewChild('agm-map', {static: false}) gmap: ElementRef;

  @ViewChild('search')  public searchElementRef: ElementRef;
//  map: google.maps.Map;
title="Angular Google Maps";
  lat = 0; lng =0;
  //coordinates = new google.maps.LatLng(this.lat, this.lng);
  //mapOptions: google.maps.MapOptions = { center: this.coordinates, zoom: 10, };
 
 marker:google.maps.Marker;
  position: any;
  ngOnInit() {
    this.gelocationsubscription = this.geolocation$.pipe().subscribe(position => this.doSomethingWithPosition(position));
        
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //this.mapInitializer(); 
   
  }

  testsearhc()
    {

    }
  
  search()
  {
    
    this.mapsAPILoader.load().then(() => { 
      this.geoCoder = new google.maps.Geocoder;

    const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
    autocomplete.addListener("place_changed", () => {
      
      this._ngZone.run(() => {
        //get the place result
        const place: google.maps.places.PlaceResult = autocomplete.getPlace();

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }
      }); 
    });
  });
  }

  doSomethingWithPosition(pos)
  {
    
    this.position = pos;
    this.lat = this.position.coords.latitude;
    this.lng = this.position.coords.longitude;
    
    

  }

}

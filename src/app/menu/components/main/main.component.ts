import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare const $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  map: boolean = true;
  list: boolean = true;
  card: boolean = true;
  showen: string = 'maps';
  constructor(private _AuthService: AuthService) {}

  ngOnInit(): void {}
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 25.295213,
    lng: 50.454654,
  };
  mapsop: google.maps.MapOptions = {
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#202124' }],
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#202124' }],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#202124' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#202124' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#202124' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#202124' }],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }],
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }],
      },
    ],
  };
  zoom = 8;

  projectslocations: googleMaps_ApiReturn[] = [
    {
      position: {
        lat: 25.295213,
        lng: 50.454654,
      },
      status: {
        scaledSize: {
          height: 40,
          width: 40,
          equals(other) {
            return true;
          },
        },
        url: '../../../../assets/maps_images/green.png',
      },
    },
    {
      position: {
        lat: 24.295213,
        lng: 50.454654,
      },
      status: {
        scaledSize: {
          height: 40,
          width: 40,
          equals(other) {
            return true;
          },
        },
        url: '../../../../assets/maps_images/yellow.png',
      },
    },
    {
      position: {
        lat: 24.895213,
        lng: 49.454654,
      },
      status: {
        scaledSize: {
          height: 40,
          width: 40,
          equals(other) {
            return true;
          },
        },
        url: '../../../../assets/maps_images/red.png',
      },
    },
  ];

  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };
  filterForm: FormGroup = new FormGroup({
    project_type: new FormControl('1', [
      Validators.required,
      Validators.min(1),
      Validators.max(200),
    ]),
    now_check: new FormControl('checked', [Validators.required]),
    complete_check: new FormControl(false, [Validators.required]),

    late_check: new FormControl(false, [Validators.required]),

    end_check: new FormControl('checked', [Validators.required]),

    not_check: new FormControl(false, [Validators.required]),
    project_start: new FormControl(null, [Validators.required]),
    project_end: new FormControl(null, [Validators.required]),
    task_range: new FormControl(null, [Validators.required]),
    constructor_range: new FormControl(null, [Validators.required]),
  });

  submitFilterForm(filterForm: FormGroup) {
    // console.log(filterForm.value)
  }

  showFav() {
    this.map = !this.map;
    this.list = !this.list;
    this.card = !this.card;
  }

  // show list theme
  showList() {
    $('#list').addClass('active-theme');
    $('#map').removeClass('active-theme');
    $('#card').removeClass('active-theme');
    this.showen = 'lists';
  }

  // show list theme
  showMap() {
    $('#map').addClass('active-theme');
    $('#list').removeClass('active-theme');
    $('#card').removeClass('active-theme');
    this.showen = 'maps';
  }

  // show list theme
  showCard() {
    $('#card').addClass('active-theme');
    $('#map').removeClass('active-theme');
    $('#list').removeClass('active-theme');
    this.showen = 'cards';
  }

  // for responsive toggle sidebar
  toggle() {
    if ($('.sidebar').css('width') == '220px') {
      $('.sidebar').css('width', '55px');
      $('li span').fadeOut(0);
      $('.content-body').css('padding-right', '55px');
    } else {
      $('.sidebar').css('width', '220px');
      $('.content-body').css('padding-right', '220px');
      $('li span').fadeIn(1500);
    }
  }

  // this function to log out
  logOut() {
    this._AuthService.logout();
  }
}
interface ProjectStatus {
  iconurl: string;
}

interface googleMaps_ApiReturn {
  position: google.maps.LatLngLiteral;
  status: google.maps.Icon;
}

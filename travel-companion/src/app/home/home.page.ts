import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  ngOnInit() {
    this.testDeviceInfo();
    this.testGeolocation();
    this.testCameraDevices();
  }

  testDeviceInfo() {
    console.log({
      userAgent: navigator.userAgent,
      platform: navigator.platform
    });
  }

  testGeolocation() {
    navigator.geolocation.watchPosition((position) => {
      console.log('New position:', position);
    });
  }

  testCameraDevices() {
    navigator.mediaDevices.enumerateDevices()
      .then(devices => {
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        console.log('Video Devices:', videoDevices);
      });
  }
}

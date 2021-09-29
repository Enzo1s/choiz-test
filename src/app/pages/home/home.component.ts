import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  viewModal: boolean = true;
  message: string = "Las mejores expertas en ginecología del país están a tu disposición para conversar sin que tengas que salir de tu casa."
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @function consult
   * Show the modal step by step
   */
  consult() {
    this.viewModal = false
  }
}

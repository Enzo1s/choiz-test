import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  viewModal: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  consult() {
    this.viewModal = false
  }
}

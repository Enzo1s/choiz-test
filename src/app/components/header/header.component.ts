import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  text: string = 'Cuidarte siempre te cuesta menos con Choiz'
  constructor() { }

  ngOnInit(): void {
  }

}

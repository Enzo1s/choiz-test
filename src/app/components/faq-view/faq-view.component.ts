import { Component, Input, OnInit } from '@angular/core';
import { IFaq } from 'src/app/models/Faq';

@Component({
  selector: 'app-faq-view',
  templateUrl: './faq-view.component.html',
  styleUrls: ['./faq-view.component.sass']
})
export class FaqViewComponent implements OnInit {

  @Input() faq: IFaq;
  view: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  open(){
    this.view = !this.view
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IFaq } from 'src/app/models/Faq';
import { loadFaqs } from 'src/app/redux/actions/faq.action';
import { IState } from 'src/app/redux/reducers';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.sass']
})
export class FaqsComponent implements OnInit {

  faqs: IFaq[];
  view: boolean = false;
  constructor(private faqStore: Store<IState>) { }

  ngOnInit(): void {
    this.faqStore.dispatch(loadFaqs());
    this.faqStore.select('faqReducer').subscribe((res) => {
      if(typeof res.faqs !== 'undefined') {
        this.faqs= res.faqs['data']
        console.log(this.faqs)
      }
    })
  }

  open(){
    this.view = !this.view
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PublicService } from '../public.service';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  ENDPOINT = environment.ENDPOINT_FAQ
  constructor(private publicService: PublicService) { }

  getAll(): Observable<any> {
    return this.publicService.get<any>(this.ENDPOINT);
  }
}

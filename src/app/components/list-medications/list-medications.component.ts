import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IData } from 'src/app/models/Data';
import { IMedicine } from 'src/app/models/Medicine';
import { loadMedicines } from 'src/app/redux/actions/medicine.actions';
import { IState } from 'src/app/redux/reducers/index';
import { MedicineService } from 'src/app/services/controllers/medicine.service';

@Component({
  selector: 'app-list-medications',
  templateUrl: './list-medications.component.html',
  styleUrls: ['./list-medications.component.sass']
})
export class ListMedicationsComponent implements OnInit {

  data: IData;
  rings: IMedicine[] = [];
  pills: IMedicine[] = [];
  patches: IMedicine[] = [];
  constructor(private medicineStore: Store<IState>) { }

  ngOnInit(): void {
   this.medicineStore.dispatch(loadMedicines());
   this.medicineStore.select('medicineReducer').subscribe((res) => {
     if(typeof res.medicines !== 'undefined') {
       this.data = res.medicines['data']
       this.pills = this.data.pills
       this.rings = this.data.rings
       this.patches = this.data.patches
     }
   })
  }
}

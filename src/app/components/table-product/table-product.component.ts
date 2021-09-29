import { Component, Input, OnInit } from '@angular/core';
import { IMedicine } from 'src/app/models/Medicine';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.sass']
})
export class TableProductComponent implements OnInit {

  @Input() products: IMedicine[];
  @Input() type: string;
  tableTitle: string = '';
  constructor() { }

  ngOnInit(): void {
    this.typeSelect()
  }

  /**
   * @function typeSelect
   * Assign the title to each table according to the type 
   * variable obtained from the component properties
   */
  typeSelect() {
    switch (this.type) {
      case 'pills':
        this.tableTitle = 'Pastillas'
        break;
      case 'rings':
        this.tableTitle = 'Anillos'
        break;
      case 'patches':
        this.tableTitle = 'Parches'
        break;
      default:
        this.tableTitle = this.type
        break;
    }
  }
}

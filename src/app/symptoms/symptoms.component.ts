// import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// import { COMMA, ENTER } from '@angular/cdk/keycodes';
// import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
// import { MatChipInputEvent } from '@angular/material/chips';
// import { map, startWith, filter } from 'rxjs/operators';
// import { Observable } from 'rxjs';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { SharedService } from '../Services/shared.service';
// import { DataService } from '../Services/data.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-symptoms',
//   templateUrl: './symptoms.component.html',
//   styleUrls: ['./symptoms.component.scss']
// })
// export class SymptomsComponent implements OnInit {

//   symptomVisible = true;
//   symptomSelectable = true;
//   symptomRemovable = true;
//   symptomAddOnBlur = true;
//   readonly separatorKeysCodes: number[] = [ENTER, COMMA];
//   symptoms: string[] = [];
//   valueAlreadySelected: boolean;
//   filteredSymptoms: any;
//   symptomCtrl = new FormControl();
//   allSymptoms: string[] = [];
//   ageValue: any;
//   userData = {};
//   gotBrands: boolean;

//   symptomFormGroup: FormGroup;

//   @ViewChild('symptomInput', { static: false }) symptomInput: ElementRef<HTMLInputElement>;
//   @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

//   constructor(
//     public formBuilder: FormBuilder,
//     public sharedService: SharedService,
//     public dataService: DataService,
//     public router: Router
//   ) {

//     this.filteredSymptoms = this.symptomCtrl.valueChanges.pipe(
//      startWith(''),
//      map(symptom => symptom && symptom.length >= 3 ? this._filter(symptom) : []));
//   }

//   ngOnInit() {

//     this.symptomFormGroup = new FormGroup({
//       symptomCtrl: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*')])
//     });

//     this.ageValue = Object.values(this.sharedService.getAge())[0];

//     this.dataService.getSymptoms(this.ageValue).subscribe(symptoms => {

//       this.allSymptoms = symptoms.data;
//     });


//   }

//   get symptomControl() {
//     return this.symptomFormGroup.get('symptomCtrl');
//   }

//   private _filter(value: string): string[] {
//     const filterValue = value.toLowerCase();
//     const filterSymptoms = this.allSymptoms.filter(medicine => medicine.toLowerCase().indexOf(filterValue) === 0);
//     return filterSymptoms;
//   }

//   addSymptom(event: MatChipInputEvent): void {
//     if (!this.matAutocomplete.isOpen) {
//       const input = event.input;
//       const value = event.value;

//       if ((value || '').trim()) {
//         // this.symptoms.push(value.trim());
//         if (this.allSymptoms.includes(value)) {
//           // console.log('Yes');
//           if (!this.symptoms.includes(value)) {
//             this.symptoms.push(value.trim());
//           } else {
//             this.valueAlreadySelected = true;
//             // console.log('Value is already selected');
//           }
//         } else {
//           // console.log('No');
//         }
//       }

//       if (input) {
//         input.value = '';
//       }

//       this.symptomCtrl.setValue(null);
//     }
//   }

//   removeSymptom(medicine: string): void {
//     const index = this.symptoms.indexOf(medicine);

//     if (index >= 0) {
//       this.symptoms.splice(index, 1);
//     }
//   }

//   symptomSelected(event: MatAutocompleteSelectedEvent): void {
//     // console.log('All symptoms : ' + this.allSymptoms);
//     if (this.allSymptoms.includes(event.option.viewValue)) {
//       // console.log('Yes');
//       if (!this.symptoms.includes(event.option.viewValue)) {
//         this.symptoms.push(event.option.viewValue);
//         this.symptomInput.nativeElement.value = '';
//         this.symptomCtrl.setValue('');
//         this.valueAlreadySelected = false;
//       } else {
//         this.valueAlreadySelected = true;
//         // console.log('Value is already selected');
//       }
//     } else {
//       // console.log('No');
//     }
//   }

//   cancel() {
//     this.valueAlreadySelected = false;
//   }

//   getBrands() {

//     if (this.symptoms.length > 0) {
//       // console.log('Symptoms component : ' + this.symptoms);
//       this.sharedService.setSymptoms(this.symptoms);

//       this.userData['ageGroup'] = this.sharedService.getIntegerAge();
//       this.userData['brand'] = '';
//       this.userData['category'] = 'UPPER RESPIRATORY';
//       this.userData['requestFor'] = 'brand';
//       this.userData['subBrand'] = '';
//       this.userData['subCategory'] = '';
//       this.userData['supplierUniqueRecordId'] = 1;
//       this.userData['symptoms'] = this.symptoms;
//       this.dataService.getMedicinesData(this.userData).subscribe(medicines => {
//         // console.log(medicines['data'].data);
//         this.gotBrands = true;
//         this.sharedService.setMedicines(medicines['data'].data, this.gotBrands);
//         // console.log('Shared medicies to service!');
//         this.router.navigateByUrl('/brands');
//       });
//     }
//   }

// }


import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from '../Services/shared.service';
import { DataService } from '../Services/data.service';

export interface Symptoms {
  name: string;
  position: number;
}

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss']
})

export class SymptomsComponent implements OnInit {

  constructor(
    public router: Router,
    public location: Location,
    public sharedService: SharedService,
    public dataService: DataService
    ){}

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  subCategoryData = {};
  symptomData = [];

  displayedColumns: string[] = ['select', 'name'];
  selection = new SelectionModel<Symptoms>(true, []);
  dataSource: MatTableDataSource<Symptoms>;

  ngOnInit() {
    console.log('Sub category : ' + this.sharedService.getSubCategory())
    this.subCategoryData['ageGroup'] = this.sharedService.getAge();
    this.subCategoryData['brand'] = '';
    this.subCategoryData['category'] = '';
    this.subCategoryData['requestFor'] = 'symptoms';
    this.subCategoryData['subBrand'] = '';
    this.subCategoryData['subCategory'] = this.sharedService.getSubCategory();
    this.subCategoryData['supplierUniqueRecordId'] = 1;
    this.subCategoryData['symptoms'] = [];

    this.dataService.getSymptoms(this.subCategoryData).subscribe(symptoms => {
      this.symptomData = symptoms.data.data;
      this.dataSource = new MatTableDataSource(symptoms.data.data);

      this.dataSource.paginator = this.paginator;
      console.log('Symptms : ' + this.symptomData);
    });


  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Symptoms): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  getBrands() {
    console.log(this.selection.selected)
    // for (let i = 0 ; i < Object.keys(this.selection.selected).length; i++) {
    //   // console.log('Selected symptom : ' + this.selection.selected[i].name);
    //   this.symptomData.push(this.selection.selected[i].name);
    // }
    this.sharedService.setSymptoms(this.selection.selected);
    this.router.navigateByUrl('/brands');
  }

  prev(){
    this.router.navigateByUrl('/subCategory');
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../Services/data.service';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {

  selectedRow: number;
  setClickedRow: (index: any) => void;
  valueSelected: boolean;
  selectedSubCategory: any;

  // subCategories = [
  //   {name: 'Allergy', symptoms: ['Sneezing', 'Itchy Nose', 'Itchy Eyes', 'Congestion']},
  //   {name: 'Cold', symptoms: ['Sore Throat', 'Running Nose', 'Cough', 'Headache', 'Fever']},
  //   {name: 'Allergy, Cold or Sinus/Nasal Congestion', symptoms: ['Sinus Pressure', 'Headache', 'Congestion']}
  // ];

  subCategories = [];
  subCategory: string;

  constructor(
    public router: Router,
    public location: Location,
    public dataService: DataService,
    public sharedData: SharedService
  ) {
    this.setClickedRow = function(index) {
      this.selectedRow = index;
      this.selectedSubCategory = index;
      console.log('Symptom : ' + index);
      this.sharedData.setSubCategory(index);
    };
   }

  ngOnInit() {
    const ageGroup = this.sharedData.getAge();
    this.dataService.getSubCategory(ageGroup).subscribe(subCategory => {
      for (let i =0; i < subCategory.data.length; i++) {
        if (subCategory.data[i] !== '') {
          this.subCategories.push(subCategory.data[i]);
        }
      }
    });
  }

  selected(value: string) {
    this.subCategory = value;
    console.log('Symptom : ' + value);
    // this.sharedData.setSubCategory(value);
    this.valueSelected = true;
  }

  selectSymptoms() {
    // console.log('Sub Category : ' + this.subCategory );
    this.router.navigateByUrl('/symptoms');
  }

  prev() {
    this.location.back();
  }

}

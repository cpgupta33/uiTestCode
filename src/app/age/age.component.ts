import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from '../Services/data.service';
import { SharedService } from '../Services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss']
})
export class AgeComponent implements OnInit {

  ageFormGroup: FormGroup;
  formBuilder: FormBuilder;
  ageValue: number;
  ageValueSent = false;
  age: string;
  code111: any = 'pppp';

  // constructor(
  //   public dataService: DataService,
  //   public sharedService: SharedService,
  //   public router: Router
  // ) { }

  // ngOnInit() {

    // this.ageFormGroup = new FormGroup({
    //   ageCtrl: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*')])
    // });
  // }

  // get ageControl() {
  //   return this.ageFormGroup.get('ageCtrl');
  // }

//   eventHandler(event) {
//     if (event.keyCode == 13 ||event.keyCode == '13' ) {
//       this.ageData();
//     }
//  }

  // ageData() {
  //   if (this.ageControl.value > 0 && this.ageControl.value <= 150) {
  //     this.sharedService.setIntegerAge(this.ageControl.value);
  //     this.ageValue = this.ageControl.value;
  //     this.dataService.getAgeGroup(this.ageValue).subscribe(ageGroup => {
  //       this.ageValueSent = true;
  //       this.sharedService.setAge(ageGroup.data, this.ageValueSent);
  //       this.router.navigateByUrl('/symptoms');
  //   });
  //   }
  // }

  selectedGroup: string;
  ageSelected: boolean;
  ageGroup = [];
  adult: string;
  child: string;

  constructor(
    public dataService: DataService,
    public sharedService: SharedService,
    public router: Router
  ) { }

  ngOnInit() {
    this.dataService.getAgeGroup().subscribe(age => {
      for (let i = 0; i < Object.keys(age.data).length; i++) {
        if (age.data[i].adult_child === 'Adult' ) {
          this.adult = age.data[i].adult_child;
        } else if (age.data[i].adult_child === 'Child' ) {
          this.child = age.data[i].adult_child;
        } else {
          console.log();
        }
      }
    });
  }

  getAgeGroup(ageGroup) {
    this.ageSelected = true;
    if (this.selectedGroup && this.selectedGroup === ageGroup) {
      this.selectedGroup = '';
    } else {
      this.selectedGroup = ageGroup;
    }
    // console.log(typeof(ageGroup));
    this.sharedService.setAge(ageGroup);
  }

  next() {
    if (this.selectedGroup) {
      this.router.navigateByUrl('/subCategory');
    } else {
      alert('Please select your age!');
    }
  }

}

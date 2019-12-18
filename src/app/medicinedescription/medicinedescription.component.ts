import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Services/data.service';
import { SharedService } from '../Services/shared.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-medicinedescription',
  templateUrl: './medicinedescription.component.html',
  styleUrls: ['./medicinedescription.component.scss']
})
export class MedicinedescriptionComponent implements OnInit {

  medicineDescription = {};
  constructor(
    public route: ActivatedRoute,
    public dataService: DataService,
    public sharedService: SharedService,
    public location: Location
  ) { }

  medicineDesc: string;

  ngOnInit() {
    const medicineID = this.route.snapshot.params.medicineID;
    this.medicineDescription['id'] = medicineID;
    this.medicineDescription['supplierUniqueRecordId'] = 1;

    console.log('Medicine ID : ' + medicineID);
    this.dataService.getMedicineDescription(medicineID, 1).subscribe(medicineData => {
      // console.log('Medicine data : ' + Object.keys(medicineData.data));
      this.medicineDesc = medicineData;
    });
  }

  goBack() {
    this.location.back();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../Services/data.service';
import { SharedService } from '../Services/shared.service';
import { Location } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss']
})
export class MedicinesComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    public dataService: DataService,
    public sharedService: SharedService,
    public router: Router,
    public location: Location
  ) { }

  subBrandDetails = {};
  medicineData = [];

  customOptions: OwlOptions = {
    // loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<button class = "next-prev" style = "color:green" >&#8249;</button>',
    '<button class = "next-prev" style = "color:green">&#8250;</button>'] ,
    // items: 3,
    // nav: true,
    // autoWidth:true,
    // margin: -55,
    responsive: {
      320: {
        items: 1
      },
      375: {
        items: 1
      },
      590: {
        items: 2
      },
      990: {
        items: 3
      },
      1024: {
        items: 3,
      },
      2560: {
        items: 3
      }
    },
  };


  ngOnInit() {
    const subBrand = this.route.snapshot.params.subBrand;
    this.subBrandDetails['ageGroup'] = this.sharedService.getAge();
    this.subBrandDetails['brand'] = this.sharedService.getBrand();
    this.subBrandDetails['category'] = 'UPPER RESPIRATORY';
    this.subBrandDetails['requestFor'] = 'medicines';
    this.subBrandDetails['subBrand'] = subBrand;
    this.subBrandDetails['subCategory'] = this.sharedService.getSubCategory();
    this.subBrandDetails['symptoms'] = this.sharedService.getSymptoms();
    this.subBrandDetails['supplierUniqueRecordId'] = 1;

    this.dataService.getMedicineForSubBrand(this.subBrandDetails).subscribe(medicines => {
      const data = medicines.data.data;
      const images = this.sharedService.getImages();
      this.medicineData = data;
      console.log(data);
      // console.log(Object.values(data));
      // for (let i = 0 ; i < Object.keys(data).length; i++) {
      //   // this.medicineData.push(data[i]);
      //   // console.log(data[i]);
      //   console.log(data[i]);
      //   for (let j = 0 ; j < images.length; j++) {
      //     if (data[i].brand.toUpperCase() === images[j].name.toUpperCase()) {
      //       console.log(images[j].image);
      //       data[i]['image'] = images[j].image;
      //       this.medicineData.push(data[i]);
      //       console.log('Medicine data : ' + this.medicineData);
      //     } else {
      //       // data[i]['image'] = 'assets/images/noimg.png';
      //       // this.medicineData.push(data[i]);
      //     }
      //   }
      //   // console.log(data[i].brand);
      // }
    });
  }

  goBack() {
    this.location.back();
  }
  prevPage() {
    this.location.back();
  }
}

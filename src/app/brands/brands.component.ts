import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../Services/shared.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DataService } from '../Services/data.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

export interface Medicines {
  brand: string;
}

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  displayedColumns: string[] = ['brand'];
  dataSource: MatTableDataSource<Medicines>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  gotBrands: boolean;
  medicines: Medicines[] = [];
  meds = {};
  brandData = {};
  symptomsData = {};
  brands = [];

  constructor(
    public sharedService: SharedService,
    public dataService: DataService,
    public router: Router,
    public location: Location ) {
  }

  ngOnInit() {

    // this.gotBrands =  this.sharedService.getMedicines()[1];
    // this.medicines = this.sharedService.getMedicines()[0];

    console.log(this.sharedService.getSymptoms());
    this.symptomsData['ageGroup'] = this.sharedService.getAge();
    this.symptomsData['brand'] = '';
    this.symptomsData['category'] = '';
    this.symptomsData['requestFor'] = 'brand';
    this.symptomsData['subBrand'] = '';
    this.symptomsData['subCategory'] = this.sharedService.getSubCategory();
    this.symptomsData['supplierUniqueRecordId'] = 1;
    this.symptomsData['symptoms'] = this.sharedService.getSymptoms() ;

    this.dataService.getMedicinesData(this.symptomsData).subscribe(medicine => {
      console.log('Medicines : ' + Object.keys(medicine.data.data) );
      // this.sharedService.setMedicines(medicine.data.data);
      // this.symptomData = medicine.data.data;

      Object.keys(medicine.data.data).forEach(key => {
        this.brands.push(key);
      });

      this.dataSource = new MatTableDataSource(this.brands);
      this.dataSource.paginator = this.paginator; 
      // console.log('Symptms : ' + this.symptomData);
    });

    console.log(this.sharedService.getMedicines());

    this.dataSource = new MatTableDataSource();

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    // console.log(filterValue);
    this.dataSource.filter = filterValue.trim();

    this.dataSource.filter = filterValue.toLowerCase().trim();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  showSubBrands(brand) {
    this.brandData['ageGroup'] = this.sharedService.getAge();
    this.brandData['brand'] = brand;
    this.brandData['category'] = 'UPPER RESPIRATORY';
    this.brandData['requestFor'] = 'subBrand';
    this.brandData['subBrand'] = '';
    this.brandData['subCategory'] =  this.sharedService.getSubCategory() ;
    this.brandData['symptoms'] = this.sharedService.getSymptoms();
    this.brandData['supplierUniqueRecordId'] = 1;
    // console.log('Brand selected : ' + brand);

    this.dataService.getSubBrands(this.brandData).subscribe(subBrands => {
      // console.log('Sub Brands : ' + subBrands.data.data);
      this.sharedService.setSubBrands(subBrands.data.data);
    });
  }
  goBack() {
    this.router.navigateByUrl('/symptoms');
  }
}

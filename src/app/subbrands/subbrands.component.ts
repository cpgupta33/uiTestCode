import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../Services/data.service';
import { SharedService } from '../Services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface SubBrands {
  subBrand: string;
}

@Component({
  selector: 'app-subbrands',
  templateUrl: './subbrands.component.html',
  styleUrls: ['./subbrands.component.scss']
})
export class SubbrandsComponent implements OnInit {

  displayedColumns: string[] = ['subBrand'];
  dataSource: MatTableDataSource<SubBrands>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public dataService: DataService,
    public sharedService: SharedService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  brandData = {};
  subBrandsData = [];


  ngOnInit() {
    const brand = this.route.snapshot.params.brand;
    console.log('subCategory : ' + this.sharedService.getSubCategory());
    console.log('Brand : ' + brand)
    this.brandData['ageGroup'] = this.sharedService.getAge();
    this.brandData['brand'] = brand;
    this.brandData['category'] = 'UPPER RESPIRATORY';
    this.brandData['requestFor'] = 'subBrand';
    this.brandData['subBrand'] = '';
    this.brandData['subCategory'] =  this.sharedService.getSubCategory() ;
    this.brandData['symptoms'] = this.sharedService.getSymptoms();
    this.brandData['supplierUniqueRecordId'] = 1;

    this.dataService.getSubBrands(this.brandData).subscribe(subBrands => {
      // console.log('Sub Brands : ' + subBrands.data.data);
      this.subBrandsData = subBrands.data.data;
      this.dataSource = new MatTableDataSource(subBrands.data.data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.sharedService.setSubBrands(subBrands.data.data);
    });
  }

  applyFilter(filterValue: string) {
    // console.log(filterValue);
    this.dataSource.filter = filterValue.trim();

    this.dataSource.filter = filterValue.toLowerCase().trim();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goBack() {
    this.router.navigateByUrl('/brands');
  }

}

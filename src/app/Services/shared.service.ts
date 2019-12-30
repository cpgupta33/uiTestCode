import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private ageData: string;
  private subCategory: string;
  private medicinesData = [];
  private gotSymptoms: boolean;
  private integerAge: number;
  private symptomsData = [];
  private subBrandsData = [];
  private brandName: string;

  images = [
    {name: 'Abreva' , image: 'assets/medicines/abreva.png' },
    {name: 'Advil', image: 'assets/medicines/advil.jpg'},
    {name: 'Afrin', image: 'assets/medicines/afrin.png'},
    {name: 'Airbrone', image: 'assets/medicines/airbrone.jpg'},
    {name: 'Alavert', image: 'assets/medicines/alavert.jpg'},
    {name: 'Aleve', image: 'assets/medicines/aleve.jpg'},
    {name: 'Alka', image: 'assets/medicines/alka.png'},
    {name: 'Allegra', image: 'assets/medicines/allegra.jpg'},
    {name: 'Anbesol', image: 'assets/medicines/anbesol.jpg'},
    {name: 'Aquaphor', image: 'assets/medicines/aquaphor.jpg'},
    {name: 'Aubio', image: 'assets/medicines/aubio.jpg'},
    {name: 'AYR', image: 'assets/medicines/ayr.jpg'},
    {name: 'Benadryl', image: 'assets/medicines/benadryl.jpg'},
    {name: 'Benzedrex', image: 'assets/medicines/benzedrex.jpg'},
    {name: 'Blistex', image: 'assets/medicines/blistex.jpg'},
    {name: 'Campho-phenique', image: 'assets/medicines/campho-phenique.jpg'},
    {name: 'Claritin', image: 'assets/medicines/claritin.jpg'},
    {name: 'Sudafed', image: 'assets/medicines/sudafed.jpg'},
    {name: 'Zyrtec', image: 'assets/medicines/zyrtec.jpg'},
  ];

  setIntegerAge(age) {
    this.integerAge = age;
  }

  getIntegerAge() {
    return this.integerAge;
  }

  setBrand(brand){
    this.brandName = brand;
  }

  getBrand(){
    return this.brandName;
  }

  setSymptoms(symptoms) {
    // console.log('Symptoms : ' + symptoms);
    this.symptomsData = symptoms;
  }

  getSymptoms() {
    return this.symptomsData;
  }


  setSubCategory(value) {
    this.subCategory = value;
  }

  getSubCategory() {
    return this.subCategory;
  }

  setAge(age) {
    this.ageData = age;
  }

  getAge() {
    return this.ageData;
  }

  setGotSymptoms(symptoms) {
    this.gotSymptoms = symptoms;
    // console.log('Symptoms : ' + symptoms);
  }

  getGotSymptoms(){
    return this.gotSymptoms;
  }

  setMedicines(medicines) {
    this.medicinesData = medicines;
    // console.log('setMedicines : ' + this.medicinesData);
  }

  getMedicines() {
    // console.log('getMedicines : ' + this.medicinesData);
    return this.medicinesData;
  }

  setSubBrands(subBrands) {
    this.subBrandsData = subBrands;
  }

  getSubBrands() {
    return this.subBrandsData;
  }

  getImages(){
    return this.images;
  }
}

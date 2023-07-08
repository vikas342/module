import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-postproperty',
  templateUrl: './postproperty.component.html',
  styleUrls: ['./postproperty.component.css'],
})
export class PostpropertyComponent implements OnInit {
  prop_id!: number;

  add_id!: number;
  owner_id!: number;

  uid!: number;
  ownerdetails!: FormGroup;
  adressdetails!: FormGroup;
  propertydetails!: FormGroup;
  propImages!: FormGroup;
  amenitydetails!: FormGroup;

  ownerdetails_visiblity: boolean = true;
  adressdetails_visiblity: boolean = false;
  propertydetails_visiblity: boolean = false;
  propImages_visiblity: boolean = false;
  amenitydetails_visiblity: boolean = false;

  //api data

  cities!: any[];
  state!: any[];
  propfor!: any[];
  proptype!: any[];
  postedby!: any[];
  amenities_arr: any[] = [];

  constructor(
    private dataserv: DataService,
    private api: ApiService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.api.getcities().subscribe((x) => {
      this.cities = x;
    });

    this.api.getstates().subscribe((x) => {
      this.state = x;
    });

    this.api.getprop_for().subscribe((x) => {
      this.propfor = x;
    });

    this.api.getprop_postedby().subscribe((x) => {
      this.postedby = x;
    });

    this.api.getproptype().subscribe((x) => {
      this.proptype = x;
    });

    this.api.getprop_amenities().subscribe((x) => {
      // console.log(x);
      this.amenities_arr = x;
      // console.warn(this.amenities_arr);
      this.pushamnities();
    });

    this.uid = Number(localStorage.getItem('uid'));
    // alert(typeof(this.uid))

    this.ownerdetails = this.fb.group({
      Owner_Id: [this.uid],
      Owner_Name: ['', [Validators.required]],
      contact_no: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
    });

    this.adressdetails = this.fb.group({
      Building_Name: ['', [Validators.required]],
      Area: ['', [Validators.required]],
      State: ['', [Validators.required]],
      City: ['', [Validators.required]],
      Pincode: ['', [Validators.required]],
    });

    this.propertydetails = this.fb.group({
      Owner_details: [this.owner_id],
      Address: [this.add_id],
      PostedBy: ['', [Validators.required]],
      Prop_for: ['', [Validators.required]],
      Prop_Type: ['', [Validators.required]],

      Price: ['', [Validators.required]],
      Prop_desc: ['', [Validators.required]],

      Status: [14],

     // amenities: this.fb.array([]),
    });

    this.amenitydetails = this.fb.group({
      amenities: this.fb.array([]),
    });

    this.propImages = this.fb.group({
      images: this.fb.array([

      this.fb.group({
        imageurl:['',[Validators.required]]
      })
      ]),
    });
  }

  get getamenities() {
    return this.amenitydetails.controls['amenities'] as FormArray;
  }


  get getImages() {
    return this.propImages.controls['images'] as FormArray;
  }



  addmoreImages(){
    const imges = this.fb.group({
      imageurl:['',[Validators.required]]


    });

    this.getImages.push(imges);

  }


  pushamnities() {

    for (const i of this.amenities_arr) {
      const amenity_form = this.fb.group({
        id: [i.id],
        amenity: [i.amenity],
        exist: [false, [Validators.required]],
      });

      this.getamenities.push(amenity_form);
    }
  }

  ownerdetails_Submit() {
    console.log(this.ownerdetails.value);
      this.ownerdetails_visiblity=false
    this.adressdetails_visiblity=true;
  }

  adressdetails_Submit() {
    console.log(this.adressdetails.value);
    this.adressdetails_visiblity=false;
    this.propertydetails_visiblity=true;
  }

  propertydetails_Submit() {
    console.log(this.propertydetails.value);
    this.propertydetails_visiblity=false;
    this.amenitydetails_visiblity=true;
  }

  amenitydetails_Submit(){

    console.log(this.amenitydetails.value);
    this.amenitydetails_visiblity=false;
    this.propImages_visiblity=true





  }


  propImages_Submit(){

    console.log(this.propImages.value);


  }




  submitted(){
    alert('property listed sucessfully')
  }
}

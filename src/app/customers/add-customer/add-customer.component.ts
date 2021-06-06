import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  firstName : string = '';
  terms : boolean = false;
  customerType : string = '';
  address : string = '';
  gender : string = '';
  constructor() { }

  ngOnInit(): void {
  }
  addCustomer(formvalue : NgForm){
    console.log(formvalue.value);
    // Real time- 1. validations, 2. data -processing, 3. Call API to save the data. 
  }
  resetForm(formvalue : NgForm){
    // formvalue.reset(); 
    formvalue.resetForm();
  }
  loadForm(formvalue : NgForm){
    // for setting values.
    let userDetails = {
      firstName : 'Super Mario',
      terms : true,
      customerType : '1',
      address : '221-B Baker Street',
      gender : '1'
    }

    formvalue.setValue(userDetails);
  }
}

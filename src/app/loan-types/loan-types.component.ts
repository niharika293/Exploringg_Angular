import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit {

  addLoanTypesForm!: FormGroup;
  control = this.addLoanTypesForm.controls.users as FormArray;
  constructor(private fb : FormBuilder) { }

  trackLoanName(): void {
    // console.log("Value Changed!");
    // Capturing the changes in entire form, but practically not used. 
    this.addLoanTypesForm.valueChanges.subscribe((data) => {
      console.log(data);
    });

    // Capturing the changes on a particular field, this is used mostly

    this.addLoanTypesForm.get('loanName')?.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {



    // this.addLoanTypesForm = new FormGroup({
    //   'loanName' : new FormControl,
    //   'loanDescription' : new FormControl,
    //   'loanType' : new FormControl
    // });


    // Form Array - use case -1 : Defining a simple form array.

    // let users = new FormArray([
    //   new FormControl('Super Mario'),
    //   new FormControl('Play Video games!')
    // ]);

    // console.log(users);
    // console.log(users.value);

    

    
    // way - 2 : using form Builder.
    // setting values by  passing them in parameters. 
    this.addLoanTypesForm = this.fb.group({
      // 'loanName' : new FormControl('Ghar ka kharcha '),
      // 'loanDescription' : new FormControl('Monthly expenses'),
      // 'loanType' : new FormControl('Personal Loan')

      /*
      'loanName' : new FormControl(),
      'loanDescription' : new FormControl(),
      'loanType' : new FormControl()
      */
      // Using validations 
      
      'loanName': new FormControl('',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(20)
      ]),
      'loanDescription' : new FormControl(),
      'loanType' : new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      'users' : new FormArray([
        new FormControl('Super Mario'),
        new FormControl('Play Video games!')
      ])
    });

    // setting values using object and setvalue() , useful when values are dynamic. 

    /*const newLoanObj = {
      'loanName' : 'Ghar ka kharcha ',
      'loanDescription' : 'Monthly expenses',
      // 'loanType' : 'Personal Loan'
    } */

    // this.addLoanTypesForm.setValue(newLoanObj);
    // way 3 : patch value  , don't needd to pass every key.


    // this.addLoanTypesForm.patchValue(newLoanObj);

    
    // Status Changes : 

    this.addLoanTypesForm.statusChanges.subscribe(data => {
      console.log("Form Status " + data);
    });

   


  }

  addLoanType(){
    console.log(this.addLoanTypesForm.value); //gives entire form in  1 go 
    console.log(`Printing only loan type value : ${this.addLoanTypesForm.get('loanType')?.value}`); //gives 1 specific form control value.

    // Before submitting, check if the form is valid.

    console.log(this.addLoanTypesForm.valid);
    
    // for capturing changes :
    
    this.addLoanTypesForm.valueChanges.subscribe( (data) => {
      console.log(data);
    })
  }

  resetForm(){
    this.addLoanTypesForm.reset();
  }

}
function LoanTypesForm() {
  throw new Error('Function not implemented.');
}

function getLoanTypesForm() {
  throw new Error('Function not implemented.');
}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  hideRequiredControl = new FormControl(false);

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCheckboxOne: ['', Validators.required],
      firstCheckboxTwo: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCheckbox: ['', Validators.required]
    });
  }

}

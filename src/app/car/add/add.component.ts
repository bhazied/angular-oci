import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { METHODS } from 'http';
import { CarService } from '../car.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form : FormGroup;
  private submitted = false;
  private newCar: any;
  constructor(private formBuilder: FormBuilder, private service : CarService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      model: ['', Validators.required],
      imma: ['', Validators.required]
    });
  }

  get f() {return this.form.controls;}

  onAdd(){
    this.submitted = true;
    if(this.form.invalid){
      console.log("Form is not Valid");
      return;
    }
    let data = this.form.value;
    console.log(data);
    this.service.addCar(data).subscribe(response => {
      this.newCar = response;
    });
  }

}

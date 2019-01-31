import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[]
})
export class ListComponent implements OnInit {

  public cars ;
  constructor(private service : CarService) { 
  }

  ngOnInit() {
    this.loadcars();
    
  }

  loadcars(): any {
    this.service.getCars().subscribe(cars => this.cars = cars);
  }

}

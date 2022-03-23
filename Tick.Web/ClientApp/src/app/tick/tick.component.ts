import { Component, OnInit } from '@angular/core';
import {faCheck, faCoffee} from '@fortawesome/free-solid-svg-icons';
import {TickModel} from "../models/tick-model";

@Component({
  selector: 'app-tick',
  templateUrl: './tick.component.html',
  styleUrls: ['./tick.component.css']
})
export class TickComponent implements OnInit {

  faCheck = faCheck;
  ticks_list: TickModel[]= [];

  constructor() { }

  ngOnInit(): void {
    this.ticks_list.push(new TickModel('test', 'testd'))
  }

}

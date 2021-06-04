import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  color = '';
  size = 'M'; //default values
  isDirty = true; // check if the form has dirty fields
  constructor(private activatedRoute : ActivatedRoute ) { 
    this.activatedRoute.queryParams.subscribe( params => {
      // console.log(params);
      this.color = params.color;
      this.size = params.size; // http://localhost:4200/search?id=10&color=red&size=xs will display values from the URL
    });
    
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute ) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data);
  }

}

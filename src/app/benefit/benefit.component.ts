import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Benefit } from '../benefit';
import { BenefitService } from '../benefit.service';

@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.css']
})
export class BenefitComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private benefitService: BenefitService,
    private location: Location) { }

  ngOnInit() {

  }
  benefit:Benefit;
  getBenefit():void {


  }

}
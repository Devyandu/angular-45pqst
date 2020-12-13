import { Component, OnInit } from "@angular/core";
import { Benefit } from "../benefit";

@Component({
  selector: "app-benefits-list",
  templateUrl: "./benefits-list.component.html",
  styleUrls: ["./benefits-list.component.css"]
})
export class BenefitsListComponent implements OnInit {
  constructor() {}
  benefits: Benefit[];

  ngOnInit() {
    this.benefits = [
      {
        icon: "doctor",
        name: "ovcopay",
        title: "Office Visit Co-Pay",
        value: "$25 per visit"
      },
      {
        icon: "doctor",
        name: "ovcopay",
        title: "Office Visit Co-Pay",
        value: "$25 per visit"
      },
      {
        icon: "doctor",
        name: "ovcopay",
        title: "Office Visit Co-Pay",
        value: "$25 per visit"
      },
      {
        icon: "doctor",
        name: "ovcopay",
        title: "Office Visit Co-Pay",
        value: "$25 per visit"
      }
    ];
  }
}

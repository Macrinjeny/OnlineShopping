import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // dressData: { id: number; dressName: string; dressDetails: string; dressPrice: number; dressImg: string; }[] = [];

  constructor(private service: OrderDetailsService) { }
  dressData: any;
  ngOnInit(): void {
    this.dressData = this.service.dressDetails;
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  
  dressDetails = [
    {
      id:1,
      dressName:"Western Dress",
      dressQuantity:"15",
      dressPrice:999,
      dressImg: window.origin +'/assets/img/1 (1).jpg',
    },
    {
      id:2,
      dressName:"Top & Fit Jeans",
      dressQuantity:"30",
      dressPrice:895,
      dressImg: window.origin +'/assets/img/6.jpg',
    },
    {
      id:3,
      dressName:"Stylish Top & Trouser",
      dressQuantity:"23",
      dressPrice:755,
      dressImg:window.origin +'/assets/img/2.jpg',
    },
    {
      id:4,
      dressName:"Top & Skinny Jeans",
      dressQuantity:"25",
      dressPrice:800,
      dressImg: window.origin +'//assets/img/im3.jpg',
    },
    {
      id:5,
      dressName:"Long Kurthi Frock",
      dressQuantity:"18",
      dressPrice:950,
      dressImg:window.origin +'/assets/img/4.jpg',
    },
    {
      id:6,
      dressName:"Trendy Top & Pepe Jeans",
      dressQuantity:"32",
      dressPrice:790,
      dressImg: window.origin+'/assets/img/im1.jpg',
    },
    {
      id:7,
      dressName:"Jeans Top & Palazo",
      dressQuantity:"42",
      dressPrice:620,
      dressImg: window.origin +'/assets/img/8.jpg',
    },
    {
      id:8,
      dressName:"Stylish Tops & Jeans",
      dressQuantity:"29",
      dressPrice:799,
      dressImg: window.origin +'/assets/img/5.jpg',
    },
    {
      id:9,
      dressName:"Casual Top & Pant",
      dressQuantity:"49",
      dressPrice:999,
      dressImg: window.origin +'/assets/img/7.jpg',
    },
  ]


  

} 

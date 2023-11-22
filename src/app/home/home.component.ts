import { Component, OnInit } from '@angular/core';
import { suggestedProducts } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  suggestedProducts : suggestedProducts[] = [
    {
      banerimage:'Baner/Baner_Mobile.avif',
      category:{
        id:0,
        category: 'Electronics',
        subcategory: 'mobiles'
      }
    },
    {
      banerimage:'Baner/Baner_laptop.avif',
      category:{
        id:1,
        category: 'Electronics',
        subcategory: 'laptops'
      }
    },
    {
      banerimage:'Baner/Baner_Chair.jpg',
      category:{
        id:2,
        category: 'furnitures',
        subcategory: 'chairs'
      }
    }
  ];

  constructor(){}
  ngOnInit(): void {
      
  }
}

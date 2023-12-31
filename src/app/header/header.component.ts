import { Component, ElementRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { NavigationItem } from '../models/models';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @ViewChild('modalTitle') modalTitle !: ElementRef;
  @ViewChild('container', {read: ViewContainerRef, static: true})
  container !: ViewContainerRef;

  navigationList: NavigationItem[] = [
    {
      category:"electronics",
      subcategories: ["mobiles", "laptops"]
    },
    {
      category:"furnitures",
      subcategories: ["chairs", "tables"]
    }
  ];

  constructor(){}
  ngOnInit(): void { }

  openModal(name: string){
    this.container.clear();

    let componentType !: Type<any>
    if(name == 'login') {
      componentType = LoginComponent
      this.modalTitle.nativeElement.textContent = 'Enter Login information';
    };
    if(name == 'register') {
      componentType = RegisterComponent
      this.modalTitle.nativeElement.textContent = 'Enter Register information';
    };

    this.container.createComponent(componentType);
  }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:ingredient[] = [new ingredient('apples',5)
,new ingredient("banana",5)]


  constructor() { }

  ngOnInit() {
  }
  some(dummytest:{name:string,age:number,address:string}){
    alert(dummytest.name);
  }
}

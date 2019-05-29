import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() dummyreturn = new EventEmitter<{name:string,age:number,address:string}>()
  username:string
  constructor() { }

  ngOnInit() {
  }

  dummytest(){
    
    this.dummyreturn.emit({name:this.username,age:10,address:"nellore"})
    return false;

  }
}

import { Component, OnInit } from '@angular/core';
import {recepie} from '../recipe.model'
@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {

  listOfRecepies :recepie[] = [new recepie("milk","good for health","https://www.google.com/search?q=milk&tbm=isch&source=iu&ictx=1&fir=9i5lRfZd5SaBEM%253A%252CgpPKZ8bIACCPHM%252C%252Fm%252F04zpv&vet=1&usg=AI4_-kSlx0rYoZBfWcs5bcX9LS5ZNl_bRA&sa=X&ved=2ahUKEwim5unso73iAhVMPY8KHXZ_DcgQ_B0wH3oECA0QEQ&biw=1366&bih=657#")]
  constructor() { }

  ngOnInit() {
  }

}

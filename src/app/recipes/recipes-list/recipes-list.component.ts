import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'http://vignette4.wikia.nocookie.net/scribblenauts/images/4/42/Crash_Test_Dummy.png/revision/latest?cb=20130309213400')

  constructor() { }

  ngOnInit() {
  }

}

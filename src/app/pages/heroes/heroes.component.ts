import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:any = {}
  constructor(public dataService: DataService, public router: Router) { }

  ngOnInit() {
    this.heroes = this.dataService.obtenerData();
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
heroes:any = {}; 
termino: any;
  constructor(public servicio: DataService, 
    public activate: ActivatedRoute, public router: Router) { }

  ngOnInit() {
  this.activate.params.subscribe(
    resp => {
      this.termino = resp['termino'];
      this.heroes = this.servicio.buscarHeroes(resp['termino']);
      console.log(this.heroes);
    }
  );
  }

}

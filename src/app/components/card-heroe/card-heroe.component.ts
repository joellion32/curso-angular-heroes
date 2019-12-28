import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
  styleUrls: ['./card-heroe.component.css']
})
export class CardHeroeComponent implements OnInit {
@Input() heroe:any = {};
@Input() index:number;
@Output() heroeSeleccionado:EventEmitter<number>;

  constructor(public router:Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

   // detalle de Heroe
   verHeroe(){
     // para emitir evento desde componente hijo a padre
    //this.heroeSeleccionado.emit(this.index);
    this.router.navigate(['/detalle', this.index]);  
  }
}

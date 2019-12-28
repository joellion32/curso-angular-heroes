import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
heroe:any = {};

  constructor(public activate: ActivatedRoute, dataService: DataService) {
    this.activate.params.subscribe(
      params => {
      this.heroe = dataService.detalleHeroes(params['id']);
      console.log(this.heroe);
      }
    );
   }

  ngOnInit() {
  }


}

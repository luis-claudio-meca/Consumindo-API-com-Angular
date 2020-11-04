import { Imagens } from './../../services/placeholder.models';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  image = new Imagens();
  erro: any;
  constructor( private crudService: CrudService) {
    this.getter();
  }

  ngOnInit(): void {
  }

  getter(){
    this.crudService.getPhotos().subscribe(
      (data: Imagens) =>
        {
          this.image = data;
          console.log('DAdos recebidos: ', data);
          console.log('Dados tratados: ', this.image);
        },
        (error: any) =>
        {
          this.erro = error;
          console.log('Error: ', this.erro);
        }
    );
  }

}

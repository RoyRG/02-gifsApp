import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  constructor( private GifsServiceService: GifsServiceService){}
  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    if( valor.trim().length === 0) return;
    this.GifsServiceService.bucarGifs( valor );
    console.log(valor);
    this.txtBuscar.nativeElement.value = "";
  }
}

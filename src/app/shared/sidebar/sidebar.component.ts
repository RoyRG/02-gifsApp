import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { GifsServiceService } from '../../gifs/services/gifs-service.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent  {
  get historial(){
    return this.GifsServiceService.historial
  }
  constructor(private GifsServiceService: GifsServiceService) { }
buscar(termino: string){
  this.GifsServiceService.bucarGifs(termino);
}
}

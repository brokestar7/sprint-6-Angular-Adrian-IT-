import { Component } from '@angular/core';
import { cuento } from './interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public textos :cuento[] = [

    {texto:"El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial"}, 
    {texto:"Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes."}, 
    {texto:"Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."} 
      
      
  ]




    
    
  
  

    

  //   texto  = ["El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
  //   "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.", 
  //   "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."
  // ];
}




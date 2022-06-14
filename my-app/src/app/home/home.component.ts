import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  


  constructor() { 
    
    interface cuento {
      texto: any;
    }
    
    class textos implements cuento {
      texto  = ["El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
      "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.", 
      "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."
    ];
  }
  var frases = textos;
  
}

ngOnInit(): void {
}

}

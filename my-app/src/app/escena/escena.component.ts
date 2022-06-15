import { Component, OnInit, Input } from '@angular/core';
import { cuento } from '../interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {

  // @Input() textosEs:any;

  @Input()  public textos :cuento[] = [{texto:""}] ;

  constructor() { }

  ngOnInit(): void {
  }

}

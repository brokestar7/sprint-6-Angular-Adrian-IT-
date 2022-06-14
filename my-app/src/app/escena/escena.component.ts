import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {

  @Input() textosEs:any;

  constructor() { }

  ngOnInit(): void {
  }

}

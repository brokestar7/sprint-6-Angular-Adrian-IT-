import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit, Input } from '@angular/core';
import { cuento } from '../interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {

  @Input()  public textos :cuento[] = [{texto:""}] ;

  currentsentence:number = 0;
  id:any = 0;

  prev(){
    if(this.currentsentence>0){
      this.currentsentence--
      this.id--
    }
    else{
      this.currentsentence = 3;
      this.id=3
    }
  }

  next(){
    if(this.currentsentence>2){
      this.currentsentence = 0;
      this.id=0;
    }
    else{
      this.currentsentence++;
      this.id++
    }
  }



  constructor() { }

  ngOnInit(): void {
  }

}

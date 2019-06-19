import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-form-name',
  templateUrl: './form-name.component.html',
  styleUrls: ['./form-name.component.css']
})
export class FormNameComponent implements OnInit {
  @Output() sendPlayer = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  newPlayer(name: string) {
    let newPlayer = new Player(name)
    this.sendPlayer.emit(newPlayer);
  }
  

}

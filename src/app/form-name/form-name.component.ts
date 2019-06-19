import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-form-name',
  templateUrl: './form-name.component.html',
  styleUrls: ['./form-name.component.css']
})
export class FormNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newPlayer(name: string) {
    let newPlayer = new Player(name)
  }

}

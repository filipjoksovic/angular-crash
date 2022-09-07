import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "Default button text";
  @Input() color: string = "black";
  @Input() fcolor: string = "white";
  @Input() fw: string = "false";
  @Input() type: string = "button";
  @Output() btnClick = new EventEmitter();
  constructor() {
    this.text = "";
    this.color = "";
  }

  ngOnInit(): void {
  }
  onClick() {
    this.btnClick.emit(); 
  }
}

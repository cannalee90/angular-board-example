import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.component.html',
  styles: ['.status { padding-top: 60px; } .status h1 { font-size: 90px; }']
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

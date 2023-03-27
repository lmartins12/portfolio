import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  text = "Olá, seja bem vindo!";
  textComplete = "";
  delay = 100;
  i = 0;

  ngOnInit(): void {
    this.digitar();
  }

  digitar() {
    if (this.i < this.text.length) {
      this.textComplete += this.text.charAt(this.i);
      this.i++;
      setTimeout(() => this.digitar(), this.delay);
    } else {
    }
  }
}

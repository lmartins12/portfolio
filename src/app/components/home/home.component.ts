import { Component, OnInit } from '@angular/core';
import { DigitarService } from 'src/app/services/digitar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  titleComplete = '';

  constructor(private digitarService: DigitarService) { }

  ngOnInit() {
    this.digitarService.digitar('Olá, seja bem vindo!', 150).subscribe((text) => {
      this.titleComplete = text;
    });
  }
  
}

import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  text = "Olá, seja bem vindo!";
  textComplete = "";
  delay = 100;
  i = 0;

  private audio!: HTMLAudioElement;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.audio = this.renderer.createElement('audio');
    this.audio.src = 'assets/portfolioAmbientSound.MP3';
    this.audio.load();
    this.renderer.appendChild(document.body, this.audio);

    this.audio.play();
    this.digitar();
  }

  ngOnDestroy() {
    this.audio.pause();
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

import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { DigitarService } from 'src/app/services/digitar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  titleComplete = '';

  private audio!: HTMLAudioElement;
  private clickListener!: () => void;

  constructor(private renderer: Renderer2, private digitarService: DigitarService) { }

  ngOnInit() {
    this.digitarService.digitar('Olá, seja bem vindo!', 150).subscribe((text) => {
      this.titleComplete = text;
    });

    this.audio = this.renderer.createElement('audio');
    this.audio.src = 'assets/portfolioAmbientSound.MP3';
    this.audio.load();
    this.renderer.appendChild(document.body, this.audio);

    this.clickListener = this.renderer.listen('document', 'click', () => {
      this.audio.play();
    });

  }

  ngOnDestroy() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.renderer.removeChild(document.body, this.audio);
    this.clickListener();
  }
}

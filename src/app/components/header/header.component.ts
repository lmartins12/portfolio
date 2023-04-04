import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  private musicStarted = false;
  private audio!: HTMLAudioElement;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const triggerMusic = () => {
      if (!this.musicStarted) {
        this.initMusic();
      }
    };
    
    // Adiciona listener para o evento de clique
    document.body.addEventListener('click', triggerMusic);
    
    // Adiciona listener para o evento de rolagem da página
    document.body.addEventListener('scroll', triggerMusic);
  }

  private initMusic(): void {
    this.musicStarted = true;
    this.audio = new Audio('assets/portfolioAmbientSound.MP3');
    this.audio.loop = true;
    this.audio.play();
  }

  pause(): void {
    if (this.musicStarted) {
      if (this.audio.paused) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    }
  }

  scrollToComponent(id: string) {
    const element = $(`#${id}`);
    if (element) {
      $('html, body').animate({
        scrollTop: element.offset()?.top || 0
      }, 1000);
    }
  }

  menuOpen = false;

  showMenu() {
      this.menuOpen = true;
  }

  closeMenu() {
      this.menuOpen = false;
  }
}

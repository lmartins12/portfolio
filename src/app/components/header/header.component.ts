import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  scrollToComponent(id: string) {
    const element = $(`#${id}`);
    if (element) {
      $('html, body').animate({
        scrollTop: element.offset()?.top || 0 // Adicione o operador ternário aqui
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

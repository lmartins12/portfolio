import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  title = "Sobre mim";
  titleComplete = "";
  delay = 100;
  i = 0;

  ngOnInit(): void {
    this.digitar();
  }

  digitar() {
    if (this.i < this.title.length) {
      this.titleComplete += this.title.charAt(this.i);
      this.i++;
      setTimeout(() => this.digitar(), this.delay);
    } else {
    }
  }

}

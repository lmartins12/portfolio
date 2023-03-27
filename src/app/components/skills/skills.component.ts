import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  title = "Habilidades";
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

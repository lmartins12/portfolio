import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  title = "Projetos";
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

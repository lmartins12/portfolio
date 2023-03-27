import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  title = "Contato";
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

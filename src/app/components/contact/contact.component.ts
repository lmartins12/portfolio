import { Component } from '@angular/core';
import { DigitarService } from 'src/app/services/digitar.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  titleComplete: string = ''

  constructor(private digitarService: DigitarService) {  }

  ngOnInit(): void {
    this.digitarService.digitar('Contato', 100).subscribe((text) => {
      this.titleComplete = text;
    });
  }

}

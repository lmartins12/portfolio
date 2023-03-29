import { Component } from '@angular/core';
import { DigitarService } from 'src/app/services/digitar.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  titleComplete: string = ''

  constructor(private digitarService: DigitarService) {  }

  ngOnInit(): void {
    this.digitarService.digitar('Sobre mim', 100).subscribe((text) => {
      this.titleComplete = text;
    });
  }

}

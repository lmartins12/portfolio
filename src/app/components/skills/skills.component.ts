import { Component, OnInit } from '@angular/core';
import { DigitarService } from 'src/app/services/digitar.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  titleComplete: string = ''

  constructor(private digitarService: DigitarService) {
    document.body.classList.add('com-overflow');
  }

  ngOnInit(): void {
    this.digitarService.digitar('Habilidades', 100).subscribe((text) => {
      this.titleComplete = text;
    });
  }
  
  ngOnDestroy() {
    document.body.classList.remove('com-overflow');
  }
}

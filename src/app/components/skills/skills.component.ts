import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() {
    document.body.classList.add('com-overflow');
  }

  ngOnInit(): void {
  }
  
  ngOnDestroy() {
    document.body.classList.remove('com-overflow');
  }
}

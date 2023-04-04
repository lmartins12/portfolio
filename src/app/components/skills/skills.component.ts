import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillInput = 'Tech Skill';
  @ViewChild('skillInputEl') skillInputEl!: ElementRef<HTMLSpanElement>;

  constructor() {}

  updateSkillInput(skill: string) {
    this.skillInput = skill;
    if (this.skillInputEl) {
      this.skillInputEl.nativeElement.innerHTML = this.skillInput;
    }
  }
}

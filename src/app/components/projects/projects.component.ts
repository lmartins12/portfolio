import { Component, OnInit } from '@angular/core';
import { DigitarService } from 'src/app/services/digitar.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  public titleComplete: string = ''
  
  public projectsInfo:any;
  
  public selectedProject: any;

  constructor(private digitarService: DigitarService, private projectsService: ProjectsService) {  }

  ngOnInit(): void {
    this.digitarService.digitar('Projetos', 70).subscribe((text) => {
      this.titleComplete = text;
    });

    this.projectsService.getProjects().subscribe(data => {
      this.projectsInfo = data;
      this.selectedProject = this.projectsInfo[0];
    });
  }

  public nextProject(): void {
    this.selectedProject = this.projectsService.getNextProject(this.projectsInfo, this.selectedProject);
  }

  public previousProject(): void {
    this.selectedProject = this.projectsService.getPreviousProject(this.projectsInfo, this.selectedProject);
  }

}

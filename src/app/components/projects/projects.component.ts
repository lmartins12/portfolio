import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  
  public projectsInfo:any;
  
  public selectedProject: any;

  constructor(private projectsService: ProjectsService) {  }

  ngOnInit(): void {

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

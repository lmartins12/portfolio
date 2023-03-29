import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get('assets/projects/projects.json');
  }

  getNextProject(projectsInfo: any[], selectedProject: any) {
    const currentIndex = projectsInfo.indexOf(selectedProject);
    const nextIndex = currentIndex === projectsInfo.length - 1 ? 0 : currentIndex + 1;
    return projectsInfo[nextIndex];
  }

  getPreviousProject(projectsInfo: any[], selectedProject: any) {
    const currentIndex = projectsInfo.indexOf(selectedProject);
    const previousIndex = currentIndex === 0 ? projectsInfo.length - 1 : currentIndex - 1;
    return projectsInfo[previousIndex];
  }

}

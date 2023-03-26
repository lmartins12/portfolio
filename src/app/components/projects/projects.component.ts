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

  public projectsInfo = [
    {
      img: "assets/projects/AluraTube.png",
      titulo: "AluraTube",
      resumo: "Projeto realizado em React, trata-se de uma simulação de playlist de musicas do youtube, utilizando banco de dados para armazenar o link das musicas.",
      link: "https://lmartins12-aluratube.vercel.app/"
    },
    {
      img: "assets/projects/DueloPokemon.png",
      titulo: "Duelo Pokémon",
      resumo: "Projeto realizado em Javascript, trata-se de uma simulção de duelo Pokémon com base em seus atributos, o que tiver o maior atributo vence.",
      link: "https://lmartins12.github.io/duelo-pokemon/"
    },
    {
      img: "assets/projects/Calculadora.png",
      titulo: "Calculador",
      resumo: "Calculadora simples para treinar utilização de Classes em Javascript",
      link: "https://lmartins12.github.io/calculadora-js/"
    },
    {
      img: "assets/projects/DodgeThePokeball.png",
      titulo: "Dodge The Pokeball",
      resumo: "Jogo simples em Javascript, clique em qualquer lugar do site para o Pikachu pular e desviar da pokebola.",
      link: "https://lmartins12.github.io/dodge-the-pokeball/"
    }
  ];

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

  public selectedProject: any = this.projectsInfo[0];

  public nextProject(): void {
    const currentIndex = this.projectsInfo.indexOf(this.selectedProject);
    const nextIndex = currentIndex === this.projectsInfo.length - 1 ? 0 : currentIndex + 1;
    this.selectedProject = this.projectsInfo[nextIndex];
  }

  public previousProject(): void {
    const currentIndex = this.projectsInfo.indexOf(this.selectedProject);
    const previousIndex = currentIndex === 0 ? this.projectsInfo.length - 1 : currentIndex - 1;
    this.selectedProject = this.projectsInfo[previousIndex];
  }

  showInfo(project: any) {
    this.selectedProject = project;
  }

  hideInfo(project: any) {
    this.selectedProject = null;
  }

}

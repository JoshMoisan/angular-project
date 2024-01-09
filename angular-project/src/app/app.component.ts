import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'josh-angular-project';
  stories = 'Histoires'
  speciality = 'Spécialité'
  contact = 'Contacte'

  showPanel(event: Event): void {
    this.resetSelection();
    const targetElement = event.target as HTMLElement;
    const titleStart = document.querySelector(".title-start") as HTMLElement;
    targetElement?.classList.add("active");
    titleStart?.classList.add("hidden");

    switch (targetElement.innerText) {
      case this.stories:
        const storyPanel = document.querySelector(".title-story");
        storyPanel?.classList.remove("hidden");
      break;

      case this.speciality:
        const specialityPanel = document.querySelector(".title-speciality");
        specialityPanel?.classList.remove("hidden");
      break;

      case this.contact:
        const contactPanel = document.querySelector(".title-contact");
        contactPanel?.classList.remove("hidden");
      break;

      default:
        console.log("Error le fichier app component dans la fonction ShowPanel")
      break;
    }
  }

  resetSelection(): void {
    const panels = document.querySelectorAll(".panel")
    const buttons = document.querySelectorAll(".button-list button")

    // Cacher les textes de droite
    panels.forEach(panel => {
      const panelClass = panel.classList.value
      if(!panelClass.includes('hidden')) {
        panel.classList.add('hidden');
      }
    })

    // Retirer la selection des boutons de gauche
    buttons.forEach(button => {
      const buttonClass = button.classList.value
      if(buttonClass.includes('active')) {
        button.classList.remove('active');
      }
    })
  }
}

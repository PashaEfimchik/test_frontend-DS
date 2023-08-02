import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-choice-random-icon',
  templateUrl: './choice-random-icon.component.html',
  styleUrls: ['./choice-random-icon.component.css']
})
export class ChoiceRandomIconComponent {
  randomIcon: any;
  allIcons: any[];

  constructor(library: FaIconLibrary) {
    // @ts-ignore
    this.allIcons = Object.keys(icons).map(key => icons[key]);
    this.randomIcon = this.allIcons[403];
  }

  showRandomIcon(): void {
    const randomIndex = Math.floor(Math.random() * this.allIcons.length);

    setTimeout(() => {
      this.randomIcon = this.allIcons[randomIndex];
    }, 3000);
  }
}

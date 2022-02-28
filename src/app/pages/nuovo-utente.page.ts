import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <label for="nome">Nome</label>
    <input (change)="canEdit = true" type="text" id="nome" required>

    <label for="email">Email</label>
    <input (change)="canEdit = true" type="email" id="email" required>
  `,
  styles: [
  ]
})
export class NuovoUtentePage implements OnInit {
  canEdit: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onDeactivate() {
    if(!this.canEdit) {
      return true;
    }

    return confirm('Sei sicuro di voler annullare le modifiche?');
  }
}

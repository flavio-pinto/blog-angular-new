import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <form id="form" class="text-center rounded">
      <label for="nome">Nome</label>
      <input class="form-control" (change)="canEdit = true" type="text" id="nome" required>
      <label for="email">Email</label>
      <input class="form-control" (change)="canEdit = true" type="email" id="email" required>
    </form>
  `,
  styles: [`
    #form {
      width: 30em;
      margin: 0 auto;
      background-color: black;
      padding: 3em;
      color: white;
    }
    `]
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

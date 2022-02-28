import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <label for="nome">Nome</label>
    <input type="text" id="nome" required>

    <label for="email">Email</label>
    <input type="email" id="email" required>
  `,
  styles: [
  ]
})
export class NuovoUtentePage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

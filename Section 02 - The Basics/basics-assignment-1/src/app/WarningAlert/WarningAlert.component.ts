import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: ` <p>Warning</p>`,
  styles: [
    `
      p {
        color: orange;
        background-color: mistyrose;
      }
    `,
  ],
})
export class WarningAlert {}

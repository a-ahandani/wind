import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { withTailwindStyles } from '../../decorators';




const componentName = "wd-menu";

@customElement(componentName)
@withTailwindStyles()
export class Menu extends LitElement {
  override render() {
    return html`
          <h1 class="text-4xl font-bold underline bg-red-300">
    Hello world!
  </h1>
      <button class="bg-red">Menu</button>
      <slot></slot>
    `;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    [componentName]: Menu;
  }
}

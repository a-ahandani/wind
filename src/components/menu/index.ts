import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TWStyles } from "../../tailwind";

const componentName = "wd-menu";

@customElement(componentName)
export class Menu extends LitElement {
  static override styles = [css`
    :host{
      display: flex;
      border: solid 1px red;
      width: 100%;
      margin: 0;
    }
  `, TWStyles];

  override render() {
    return html`
          <h1 class="text-4xl font-bold underline bg-slate-100">
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

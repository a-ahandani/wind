import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { withTailwindStyles } from '../../decorators';

const componentName = "wd-content";

@customElement(componentName)
@withTailwindStyles()
export class Content extends LitElement {

  override render() {
    return html`
      <h1 class=" bg-red-800">Content</h1>
      <slot></slot>
    `;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    [componentName]: Content;
  }
}

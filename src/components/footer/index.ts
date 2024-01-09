import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { withTailwindStyles } from '../../decorators';

const componentName = "wd-footer";

@customElement(componentName)
@withTailwindStyles()
export class Footer extends LitElement {
  override render() {
    return html`
          <p class="text-4xl text-red-800">
    Hello world!
  </p>
      <slot></slot>
    `;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    [componentName]: Footer;
  }
}

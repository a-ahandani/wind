import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { withTailwindStyles } from '../../decorators';

const componentName = "wd-head";

@customElement(componentName)
@withTailwindStyles()
export class Header extends LitElement {
  override render() {
    return html`
    <div class="flex bg-slate-400">
      <slot></slot>
    </div>
    `;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    [componentName]: Header;
  }
}

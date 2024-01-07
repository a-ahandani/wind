import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

const componentName = "wd-content";

@customElement(componentName)
export class Content extends LitElement {
  static override styles = css`
    :host{
      display: flex;
      border: solid 1px red;
      width: 100%;
      margin: 0;
    }
  `;

  override render() {
    return html`
      <h1>Content</h1>
      <slot></slot>
    `;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    [componentName]: Content;
  }
}

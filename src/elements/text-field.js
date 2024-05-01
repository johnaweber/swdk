import { LitElement, html } from 'lit';
import { Utilities } from './utilities.js';

export class SwimlaneTextField extends LitElement {
  static properties = {
    properties: { },
  };

  _defaults = {
    title:'Title Undefined'
  }

  render() {

    const props = Utilities.setDefaults(JSON.parse(this.properties),this._defaults);

    return html`
      <span>${props.title}</span><br>
      <input type="text">
    `;
  }
}
customElements.define('swdk-text-field', SwimlaneTextField);

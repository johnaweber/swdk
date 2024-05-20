import { LitElement, html } from 'lit';
import { SwdkUtilities } from '../utilities/utilities.js';

export class SwimlaneTextField extends LitElement {
  static properties = {
    properties: { },
  };

  _defaults = {
    title:'Title Undefined'
  }

  render() {

    const props = SwdkUtilities.setDefaults(JSON.parse(this.properties),this._defaults);

    return html`
      <span>${props.title}</span><br>
      <input type="text">
    `;
  }
}

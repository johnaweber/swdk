import { LitElement, html } from 'lit';
import {repeat} from 'lit/directives/repeat.js';
import { SwdkUtilities } from '../utilities/utilities.js';

/**
 * 31
*/

export class SwdkCanvas extends LitElement {
  static properties = {
    contents: {},
  };

  render() {
    return html`
    <div class="swdk-canvas">
      ${repeat(JSON.parse(this.contents), (obj)=>SwdkUtilities.generate(obj))}
    </div>
    `;
  }
}

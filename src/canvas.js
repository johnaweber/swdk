import { LitElement, html } from 'lit';
import {repeat} from 'lit/directives/repeat.js';
import { Utilities } from './utilities.js';

/**
 * Canvas takes one input, contents, which must always be an array of JSON dict
 * objects. Much like the Swimlane App-Builder, the arrangement of the contents 
 * of a Canvas are completely determined by the order in which they are 
 * rendered and their relative width. And just like the Swimlane App-Builder,
 * this can been further adjusted using the organizational components Section
 * and Tabs.
 * - As mentioned in my-implementation.js, LitElement attributes/properties
 * are primatives. They cannot be JSON objects. So passing JSON through one
 * attribute/property requires converting to String on one end, then parsing
 * back to JSON on the other end (line 26).
*/

export class SwimlaneCanvas extends LitElement {
  static properties = {
    contents: {},
  };

  render() {
    return html`
    <div class="swdk-canvas">
      ${repeat(JSON.parse(this.contents), (obj)=>Utilities.generate(obj))}
    </div>
    `;
  }
}
customElements.define('swdk-canvas', SwimlaneCanvas);

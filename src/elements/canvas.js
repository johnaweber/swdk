import { LitElement, html } from 'lit';
import {repeat} from 'lit/directives/repeat.js';
import { SwdkUtilities } from '../utilities/utilities.js';

/**
 * Canvas takes one input, contents, which must always be an array of JSON dict
 * objects. Much like the Swimlane App-Builder, the arrangement of the contents 
 * of a Canvas are completely determined by the order in which they are 
 * rendered and their relative width. And just like the Swimlane App-Builder,
 * this can been further adjusted using the organizational components Section
 * and Tabs.
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

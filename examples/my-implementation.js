import { LitElement, html } from 'lit';
import { SwimlaneCanvas } from './swimlane-canvas.js';

/**
 * This represents that which would actually be in an Application definition...
 * Of Note:
 * - The customElements.define() at the bottom only exists b/c of how this is
 * displayed through index.html.
 * - Notice that CONTENT has to be converted to a String on line 23 in order
 * to pass it through the contents attribute.
*/
const CONTENT=[
    {
        "swdk-text-field":{
          title:"My_Implementation_Content_Title_Value"
        }
    }
]
export class MyImplementation extends LitElement {

  render() {
    return html`
    <swdk-canvas contents="${JSON.stringify(CONTENT)}"></swdk-canvas>
    `;
  }
}
customElements.define('my-implementation', MyImplementation);

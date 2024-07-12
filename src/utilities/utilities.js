
import {html, unsafeStatic} from 'lit/static-html.js';
import { SwdkTextField } from '../elements/text-field.js';

/***
 * 27
*/

export class SwdkUtilities {

  static generate(definition) {

    return html`
      <${unsafeStatic(Object.keys(definition)[0])} 
        properties=${JSON.stringify(Object.values(definition)[0])}>
      </${unsafeStatic(Object.keys(definition)[0])}>
      `;
  }

  static setDefaults(obj,...defaults){

    return Object.assign({},obj,...defaults,obj)
  }
}
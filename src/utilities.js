
import {html, unsafeStatic} from 'lit/static-html.js';
import { SwimlaneTextField } from './elements/text-field.js';

/**
* generate() can certainly be turned into a massive switch/case, though
* IMHO we shouldn't do it unless we have a performance issue with large
* Canvas definitions.
*/

export class Utilities {

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
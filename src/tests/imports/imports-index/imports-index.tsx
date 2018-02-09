import { Component } from "@stencil/core";
import { import1 } from "./import1";
import { import2 } from "./import2";
import { other1 } from "./other/other1";
import { other2 } from "./other/other2";

console.log('imports-index.load');

@Component({
  tag: "imports-index"
})
export class ImportsIndex {

    constructor() {
        console.log('imports-index.ctor');
    }
    
  render() {
    console.log('imports-index.render');

    return <div>
      <div>import1: {import1}</div>
      <div>import2: {import2}</div>
      <div>other1: {other1}</div>
      <div>other2: {other2}</div>
      </div>;
  }
}

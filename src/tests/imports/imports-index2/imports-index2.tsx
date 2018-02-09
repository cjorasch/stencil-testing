import { Component } from "@stencil/core";
import { other1 } from "../imports-index/other/index";

console.log('imports-index2.load');

@Component({
  tag: "imports-index2"
})
export class ImportsIndex2 {

    constructor() {
        console.log('imports-index2.ctor');
    }
    
  render() {
    console.log('imports-index2.render');

    return <div>
      <div>other1: {other1}</div>
        </div>;
  }
}

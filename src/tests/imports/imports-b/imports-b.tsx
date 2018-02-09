import { Component } from "@stencil/core";
import { bData1 } from "./b-data1";
import { abData } from "../ab-data";
import { abcData } from "../abc-data";

console.log('imports-b.load');

@Component({
  tag: "imports-b"
})
export class ImportsB {

    constructor() {
        console.log('imports-b.ctor');
    }
    
  render() {
    console.log('imports-b.render');

    return <div>
      <div>bData1: {bData1}</div>
        <div>abData: {abData}</div>
        <div>abcData: {abcData}</div>
        </div>;
  }
}

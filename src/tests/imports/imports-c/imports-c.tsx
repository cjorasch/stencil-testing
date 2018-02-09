import { Component } from "@stencil/core";
import {cData1} from './c-data1';
import {abcData} from '../abc-data';

console.log('imports-c.load');

@Component({
  tag: "imports-c"
})
export class ImportsC {

    constructor() {
        console.log('imports-c.ctor');
    }
    
  render() {
    console.log('imports-c.render');

    return <div>
        <div>cData1: {cData1}</div>
        <div>abcData: {abcData}</div>
        </div>;
  }
}

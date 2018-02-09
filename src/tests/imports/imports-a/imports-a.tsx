import { Component } from "@stencil/core";
import { aData1, getAsync } from "./a-data1";
import { aData2 } from "./a-data2";
import "./a-data4";
import { abData } from "../ab-data";
import { abcData } from "../abc-data";
import { IContact } from "../globals";
// import { sharedText } from '../../../../shared/shared';

console.log('imports-a.load');

const contact: IContact = {
  first: 'John',
  last: 'Smith'
}
console.log(contact);

getAsync().then(console.log);

@Component({
  tag: "imports-a"
})
export class ImportsA {

    constructor() {
        console.log('imports-a.ctor');
    }

  render() {
    console.log('imports-a.render');

    return <div>
        <div>aData1: {aData1}</div>
        <div>aData2: {aData2}</div>
        <div>abData: {abData}</div>
        <div>abcData: {abcData}</div>
        </div>;
  }
}

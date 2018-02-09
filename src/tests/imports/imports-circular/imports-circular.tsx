import { Component } from "@stencil/core";
import { valueA } from "./module-a";
import { valueB } from "./module-b";

@Component({
  tag: "imports-circular"
})
export class ImportsCircular {
  render() {
    return (
      <div>
        <div>valueA: {valueA}</div>
        <div>valueB: {valueB}</div>
      </div>
    );
  }
}

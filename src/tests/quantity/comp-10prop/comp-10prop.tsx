import { Component, Prop } from "@stencil/core";

@Component({
  tag: "comp-10prop"
})
export class Comp10Prop {
  @Prop() property1: string;
  @Prop() property2: string;
  @Prop() property3: string;
  @Prop() property4: string;
  @Prop() property5: string;
  @Prop() property6: string;
  @Prop() property7: string;
  @Prop() property8: string;
  @Prop() property9: string;
  @Prop() property10: string;
}
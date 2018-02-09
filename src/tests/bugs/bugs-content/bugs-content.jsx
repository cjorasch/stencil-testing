import { Component } from "@stencil/core";

@Component({
  tag: "bugs-content"
})
export class BugsContent {
  // TODO: <ion-content> content is not visible

  render() {
    return (
      <ion-page>
        <ion-header>
          <ion-toolbar>
            <ion-title>Bugs - Content</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>Content should be visible</ion-content>
      </ion-page>
    );
  }
}

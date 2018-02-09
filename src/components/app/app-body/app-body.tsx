import { Component } from "@stencil/core";
import { renderTest } from "../../../tests/tests-render";

@Component({
  tag: "app-body",
  styleUrl: 'app-body.scss'
})
export class AppBody {
  render() {
    return (
      <stencil-router>
        <stencil-route
          url="/:parts*"
          routeRender={(props: any) => renderOther(props)}
        />
      </stencil-router>
    );
  }
}

function renderOther(props: any): JSX.Element {
  const parts = props.match.params.parts;
  return renderTest(parts);
}

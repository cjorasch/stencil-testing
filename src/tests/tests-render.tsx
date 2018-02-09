import { ITestNode } from "./tests-interfaces";
import { tests } from "./tests";

export function renderTest(path: string): JSX.Element | undefined {
  const segments = path ? path.split("/") : [];
  const node = getPath(tests, segments) as ITestNode;
  // console.log("renderTest", tests, path, node);
  if (!node)
    return renderPage({
      path: segments,
      subTitle: "Not Found",
      content: "The specified test was not found"
    });
  if (isTestSuite(node)) return renderTestSuite(segments, node);
  return renderTestCase(segments, node);
}

function getPath(obj: object, path: string | string[]): any {
  // Make sure the parameter values are specified
  if (!path) return obj;
  if (!obj) return;

  // Get the names of the path parts
  let parts: string[];
  if (typeof path === "string") {
    if (path.indexOf(".") < 0) {
      // Handle single level path
      return obj[path];
    } else {
      // Multi level path specified
      parts = path.split(".");
    }
  } else {
    // An array of path segments was specified
    parts = path;
  }

  // Handle multi level path
  for (const part of parts) {
    // Stop if null or undefined is reached
    // If a parent value is null or undefined than all child values will be undefined
    if (obj == null) {
      return;
    }

    // Get the child value
    obj = obj[part];
  }

  return obj;
}

function isTestSuite(node: ITestNode): boolean {
  return typeof node === "object" && !isJsx(node);
}

function isJsx(value: any): boolean {
  if (!value) return false;
  if (Array.isArray(value) && value.length && value[0].vtag) return true;
  if (typeof value === "object" && value.vtag) return true;
  return false;
}

// function isPromise(value: any): boolean {
//     return value && value.then && value.catch ? true : false;
// }

interface ITestPage {
  path: string[];
  title?: string;
  subTitle?: string;
  content?: JSX.Element;
}

function renderPage(page: ITestPage): JSX.Element | undefined {
  let { path, title, subTitle, content } = page;
  if (!title) title = path.length ? path[path.length - 1] : "Tests";
  return (
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>{title}</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="padding">
        {subTitle && <h2>{subTitle}</h2>}
        {content}
      </div>
    </ion-page>
  );
}

function renderTestSuite(path: string[], testSuite: any): JSX.Element {
  //console.log("renderTestSuite", path, testSuite);

  const children = Object.getOwnPropertyNames(testSuite);
  const parent = "/" + path.join("/");
  const content = (
    <ul>{children.map(item => <li>{renderNodeLink(parent, item)}</li>)}</ul>
  );
  return renderPage({
    path,
    content
  });
}

function renderNodeLink(parent: string, item: string): JSX.Element {
  const href = parent + (parent === "/" ? "" : "/") + item;
  return <a href={href}>{item}</a>;
}

function renderTestCase(path: string[], testCase: any): JSX.Element {
  // console.log("renderTestCase", path, testCase);
  if (typeof testCase !== "object" || isJsx(testCase)) {
    testCase = {
      result: testCase
    };
  }

  if (typeof testCase.result === "function")
    testCase.result = testCase.result();

  return renderPage({
    path,
    content: testCase.result
  });
}

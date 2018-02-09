export type TestResult = JSX.Element | (() => JSX.Element);

export interface ITestProps {
  title?: string; // Displayed title for the test
  format?: "page" | "content"; // The rendering format
  click?: boolean; // Require a click to run the test
  result: TestResult;
}

export type ITestNode = ITestSuite | ITestCase;
export type ITestCase = TestResult | ITestProps;
export type ITestSuite = { [name: string]: ITestNode };
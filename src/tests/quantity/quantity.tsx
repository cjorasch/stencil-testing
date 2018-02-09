// Repeat the specified content
function repeat<T>(content: T, count: number): T[] {
    const result: T[] = [];
    for (let i=0; i<count; i++) result.push(content);
    return result;
}

// Options for content to be repeated
const contentOptions = {
    div: <div>test</div>,
    span: <span>test</span>,
    compNoop: <comp-noop>test</comp-noop>,
    comp10Prop: <comp-10prop>test</comp-10prop>,
    comp20Prop: <comp-20prop>test</comp-20prop>
};

// Options for how many times to repeat the content
const countOptions = [
    100,
    1000,
    10000,
    100000
];

// Test suite for repeat tests
export const quantity = {
}

// Build tests
const contentKeys = Object.getOwnPropertyNames(contentOptions);
for (const contentKey of contentKeys) {
    for (const count of countOptions) {
        quantity[contentKey + '-' + count] = repeat.bind(null, contentOptions[contentKey], count);
    }
}
console.log('a-data1.load');
export const aData1 = 'a-data1';

export function unusedMethod() {
    return 'this is not used';
}

export async function getAsync(): Promise<string> {
    await Promise.resolve();
    return 'done';
}
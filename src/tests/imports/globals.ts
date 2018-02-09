console.log('globals.load');

export interface IContact {
    first: string;
    last: string;
}

export class Contact implements IContact {
    first: string;
    last: string;
}
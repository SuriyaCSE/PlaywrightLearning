import { test as mytest } from '@playwright/test';

type suriya = {
    username: string;
    age: number;
}


export const test = mytest.extend<suriya>({
    username: 'suriya',
    age: 24
});
import { handler } from '@src/index';

describe('Handler', () => {
    test('Returns HTML', async () => {
        const result = await handler();
        expect(result.body).toContain('<h1>This is an email</h1>');
    });
});

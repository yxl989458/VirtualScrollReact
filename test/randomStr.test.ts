import { generateRandomString } from '@utils/randomStr';
import { describe, it, expect } from 'vitest'
describe('randomStr', () => {
    it('should return a random string', () => {
        const result = generateRandomString();
        expect(result).toMatchInlineSnapshot(`"3zwaTQ86otANIdjCyTpwVI"`);
    });
});

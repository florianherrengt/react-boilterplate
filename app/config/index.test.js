import { expect } from 'chai';
import boundConfig, { config } from './index';

describe('Configuration', () => {
    it('show select the dev env by default', () => {
        expect(boundConfig.baseUrl).to.equal('http://localhost:3000');
    });
    it('show select the provided env', () => {
        expect(config('prod').baseUrl).to.equal('http://...');
    });
});


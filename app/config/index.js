import dev from './dev';
import prod from './prod';
import common from './common';

const envConfig = { dev, prod };

export const config = (env) => Object.assign({}, common, envConfig[env]);

export default config(process.env.NODE_ENV || 'dev');


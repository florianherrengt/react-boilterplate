import config from '../config';

export default (url) => fetch(`${config.baseUrl}/api/${url}`)

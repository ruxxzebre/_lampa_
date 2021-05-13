import log4js from 'log4js';
import debug from 'debug';

export const dbConfig = {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '1111',
            database: 'lampa_test_database',
        },
        useNullAsDefault: true,
    };

log4js.configure({
    appenders: { server: { type: 'file', filename: 'logs/server.log' } },
    categories: { default: { appenders: ['server'], level: 'info' } },
});

export const logger = log4js.getLogger('server');
export const sdebug = (type: string) => debug(type);

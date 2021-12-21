import { configure, getLogger } from "log4js";
configure("./filename");
const tmp = getLogger();
tmp.level = "debug";
tmp.debug("Some debug messages");
 
configure({
    appenders: {
        predictive: {
            type: 'dateFile',
            filename: 'log/predictive.log',
            pattern: 'yyyy-MM-dd',
            compress: true,
            daysToKeep: 14,
            layout: {
                type: 'pattern',
                pattern: '%d{yy-MM-dd hh:mm:ss.SSS} [%p] %m',
            },
        },
        out: {
            type: 'stdout',
            layout: {
                type: 'pattern',
                pattern: '%[%d{yy-MM-dd hh:mm:ss.SSS} [%p]%] %m',
            },
        },
        file_log: {
            type: 'logLevelFilter',
            level: 'all',
            appender: 'predictive',
        },
        console_log: {
            type: 'logLevelFilter',
            level: 'info',
            appender: 'out',
        },
    },
    categories: {
        default: {appenders: ['file_log', 'console_log'], level: 'all'},
    },
    pm2: true,
});

export const logger = tmp;
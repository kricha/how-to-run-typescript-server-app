'use strict'

import {
    App
} from '@tinyhttp/app';
import {
    Server,
    Socket
} from "socket.io";

import {
    NODE_SERVER_PORT
} from './constants'

import {
    logger
} from './logger';


const appServer = new App()
    .get('/', (_, res) => {
        logger.info('Get /');
        void res.send('<h1>Hello World</h1>');
    })
    .listen(NODE_SERVER_PORT, () => console.log(`Started on http://localhost:${NODE_SERVER_PORT}!`));

const io = new Server(appServer, {
    cors: {
        // origin: '',
        methods: ["GET", "POST"],
        credentials: true
    }
});
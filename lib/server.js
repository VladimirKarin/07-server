import http from 'node:http';
import config from '../config.js';
import { PageHome } from '../page/home.js';
import { PageAbout } from '../page/about.js';
import { PageServices } from '../page/services.js';
import { Page404 } from '../page/404.js';
import { PageContact } from '../page/contact.js';

const server = {};

server.httpServer = http.createServer((req, res) => {
    const ssl = req.socket.encryption ? 's' : '';
    const baseURL = `http${ssl}://${req.headers.host}`;
    const parsedURL = new URL(req.url, baseURL);
    const trimmedPath = parsedURL.pathname
        .replace(/^\/+|\/+$/g, '')
        .replace(/\/\/+/g, '/');

    req.on('data', () => {
        console.log('gaunami duomenys...');
    })

    req.on('end', () => {
        let PageClass = server.routes[404];
        if (trimmedPath in server.routes) {
            PageClass = server.routes[trimmedPath];
        }

        const page = new PageClass();

        res.end(page.render());
    })
});

server.routes = {
    '': HTMLhome,
    'about': HTMLabout,
    'services': HTMLservices,
    '404': HTML404,
    'contact': HTMLcontact,
};

server.init = () => {
    const { port } = config;
    server.httpServer.listen(port, () => {
        console.log(`Projekto nuoroda: http://localhost:${port}/`);
    });
};

export { server }

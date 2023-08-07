'use strict';
const express = require('express');
const todoRouter = require('./routes');
const app = express();

if (!process.env.CUSTOM_GATEWAY_INTEGRATED) {
    require('dotenv').config();
    const expressJWT = require('express-jwt');

    const corsOptions = {
        origin: process.env.REQ_ORIGIN || '*',
        preflightContinue: false,
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    };
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
}
console.log('app.starting todo: ');
app.use('/todo', todoRouter);

module.exports = {
    app: app
};

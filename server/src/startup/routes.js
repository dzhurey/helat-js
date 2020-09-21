const express = require('express');
const index = require('../routes/index');
const users = require('../routes/users');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/', index);
    app.use('/api/users', users);
}
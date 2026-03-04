const express = require("express");
const pessoas = require('./pessoasRoutes.js');
const categoria = require('./categoriasRoutes.js');
const cursos = require('./cursosRoutes.js');

module.exports = app => {
    app.use(
        express.json(),
        pessoas,
        categoria,
        cursos
    );
}
require('dotenv').config();

const express = require('express'), swaggerUi = require('swagger-ui-express');
const path = require('path');

global.appRoot = path.resolve(__dirname);
global.appName = 'App name';
global.version = 'v1';
global.patchVersion = 'v1.0.0';

const port = process.env.PORT || 5000;
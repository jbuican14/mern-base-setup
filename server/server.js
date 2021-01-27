// Set up the server to build out the node server application
import express from 'express';
import path from 'path';
import devBundle from './devBundle'; //ONLY for dev

const app = express();
const CURRENT_WORKING_DIR = process.cwd();
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));
devBundle.compile(app); //ONLY for dev

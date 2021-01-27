// Set up the server to build out the node server application
import express from 'express';
import devBundle from './devBundle'; //ONLY for dev
import path from 'path';

import template from './../template';

const app = express();
const CURRENT_WORKING_DIR = process.cwd();
let port = process.env.PORT || 3008;

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));
devBundle.compile(app); //ONLY for dev

app.get('/', (req, res) => {
  res.status(200).send(template());
});

app.listen(
  port,
  (onStart = (err) => {
    err ? console.log(err) : console.info('Server started on port %s.', port);
  })
);

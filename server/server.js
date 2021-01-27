// Set up the server to build out the node server application
import express from 'express';
import devBundle from './devBundle'; //ONLY for dev
import path from 'path';
import { MongoClient } from 'mongodb';

import template from './../template';

const app = express();
const CURRENT_WORKING_DIR = process.cwd();
let port = process.env.PORT || 3008;
const url =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSimpleSetup';

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));
devBundle.compile(app); //ONLY for dev

app.get('/', (req, res) => {
  res.status(200).send(template());
});

// Mongodb driver connects to the running MongoDB instance
MongoClient.connect(url, (err, db) => {
  console.log('Connected successfully to mongodb server');
  db.close();
});

app.listen(
  port,
  (onStart = (err) => {
    err ? console.log(err) : console.info('Server started on port %s.', port);
  })
);

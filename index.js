const express = require('express');
const { MongoClient } = require('mongodb');
const { home } = require('./routes');
const { people } = require('./models');

const app = express();
const mongoClient = new MongoClient('mongodb://localhost:27017', {
  useUnifiedTopology: true,
});

app.use('/', home);

mongoClient.connect(async (connectionError, client) => {
  if (connectionError) {
    return console.error(connectionError);
  }
  try {
    const db = client.db('phonebook');
    const collections = await db.listCollections().toArray();
    const existing = collections.find(({ name }) => name === 'people');
    app.locals.people = existing
      ? db.collection('people', people)
      : await db.createCollection('people', people);
    return app.listen(3000, () => {
      console.log(`App listening at http://localhost:3000`);
    });
  } catch (error) {
    return console.error(error);
  }
});

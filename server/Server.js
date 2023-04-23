const express = require('express');
const mongoose = require('mongoose');

const app = express();

const DB = 'mongodb+srv://rhutwikjaiswal24:rhutwik123@cluster0.whacbjs.mongodb.net/ads?retryWrites=true&w=majority';
mongoose.connect(DB);

const Ad = require('../src/Ad');

app.get('/api/search', async (req, res) => {
  const { keyword } = req.query;

  const results = await Ad.aggregate([
    {
      $search: {
        text: {
          query: keyword,
          path: ['company', 'primaryText', 'headline', 'description'],
        },
      },
    },
    {
      $project: {
        _id: 0,
        company: 1,
        primaryText: 1,
        headline: 1,
        description: 1,
      },
    },
    {
      $unwind: '$headline',
    },
  ]);

  res.json(results);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

const { Painting } = require('../models');

const paintingdata = [
  {
    title: 'Express.js',
    artist: 'Adrian',
    exhibition_date: 'March 30, 2018',
    gallery_id: 1,
    filename: 'flash.jpg',
    description:
      'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: 'Node.js',
    artist: 'Catherine',
    exhibition_date: 'May 05, 2017',
    gallery_id: 1,
    filename: 'quin.jpg',
    description: 'Pink cosmos flowers against a blue sky.',
  },
  {
    title: 'Restful API',
    artist: 'Demetrius',
    exhibition_date: 'July 20, 2010',
    gallery_id: 1,
    filename: 'batman.jpg',
    description: 'Sandy beach with the blue sea and sky in the background.',
  },
  {
    title: 'Handlebars.js',
    artist: 'Devante',
    exhibition_date: 'June 14, 2021',
    gallery_id: 1,
    filename: 'joker.jpg',
    description: 'Two beach chairs under a beach umbrella on the beach.',
  },
  {
    title: 'MYSQL',
    artist: 'Justin',
    exhibition_date: 'August 28, 2000',
    gallery_id: 1,
    filename: 'red-hood.jpg',
    description: 'Sun setting in the horizon with waves lapping the shore.',
  },
];

const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;

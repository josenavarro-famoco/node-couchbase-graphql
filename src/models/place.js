'use strict';

let ottoman = require('../db').ottoman;

let PlaceModel = ottoman.model('Place', {
  name: 'string',
  description: 'string',
  location: {
    lat: 'number',
    lon: 'number'
  },
  created: {
    type: 'Date',
    default: Date.now
  }
});

module.exports = PlaceModel;

'use strict';

const _ = require('lodash');

module.exports = {
  handler: function (event, context) {
    console.log('createUser() invoked');
    return _.capitalize(event.data);
  },
};

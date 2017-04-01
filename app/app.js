const snoowrap = require('snoowrap');
const footybotConfig = require('../footybot.conf');

const r = new snoowrap({footybotConfig});

export default {
  _identifier: /<footybot(.*)>/,
  getComments() {
    return r.getSubreddit('soccer').getNewComments();
  },
}

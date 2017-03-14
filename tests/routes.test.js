const request = require('request');
const fs = require('fs');

const footy = JSON.parse(fs.readFileSync('footy.conf.json'));

const APIPATH = 'http://api.football-data.org/v1/competitions/';
const APILEAGUE = '/leagueTable';
const TOKEN = footy.apiToken;

const headers = {
	'X-Auth-Token': TOKEN,
};

describe('the server', () => {
  test('can access all current league tables', () => {
    footy.competitions.forEach(comp => {
    	request({
		headers: headers,
		url: APIPATH + comp + APILEAGUE
	}, function (error, response, body) {
  		expect(response.statusCodes).toBe(200);
	});
  	});
	});
});
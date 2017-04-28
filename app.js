/* globals console require */
const request = require('request');

var jsdom = require('jsdom').jsdom;
var document = jsdom();
var window = document.defaultView;
var $ = require('jquery')(window);

request("http://www.imdb.com", (err, req, body) => {
    $('body').html(body)
    console.log($('body').html());
});
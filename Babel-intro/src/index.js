// const moment = require('moment');

// const a = 10;

// const day = moment().format("dddd");

// console.log(day);

// console.log(semver.coerce("v3"));

const semver = require('semver');
const range = require("semver/classes/range");

const rng = semver.range("^2.22.2");

console.log(rng);
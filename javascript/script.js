const chart = require('../data.json')


const mon = chart[0].day
const tue = chart[1].day
const wed = chart[2].day
const thu = chart[3].day
const fri = chart[4].day
const sat = chart[5].day
const sun = chart[6].day
const mon_amount = chart[0].amount
const tue_amount = chart[1].amount
const wed_amount = chart[2].amount
const thu_amount = chart[3].amount
const fri_amount = chart[4].amount
const sat_amount = chart[5].amount
const sun_amount = chart[6].amount

let myChart = document.getElementById('myChart').getContext('2d')
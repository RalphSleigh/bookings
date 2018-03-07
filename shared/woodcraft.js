//this file contains age groups, etc
const moment = require("moment");



const woodcraft = [
	{name:"Woodchips",
        filter: (dob, event) => {
            return moment(event).diff(moment(dob), 'years') < 6;
        }
    },
	{name:"Elfins",
        filter: (dob, event) => {
            return moment(event).diff(moment(dob), 'years') > 5 && moment(event).diff(moment(dob), 'years') < 11
        }
    },
	{name:"Pioneers",
        filter: (dob, event) => {
            return moment(event).diff(moment(dob), 'years') > 9 && moment(event).diff(moment(dob), 'years') < 13
        }
    },
	{name:"Venturers",
        filter: (dob, event) => {
            return moment(event).diff(moment(dob), 'years') > 12 && moment(event).diff(moment(dob), 'years') < 16
        }
    },
	{name:"DFs/Adults",
        filter: (dob, event) => {
            return moment(event).diff(moment(dob), 'years') > 15
        }
    },
];


module.exports = woodcraft;
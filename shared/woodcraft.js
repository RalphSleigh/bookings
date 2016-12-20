//this file contains age groups, etc

const woodcraft = [
	{name:"Woodchips",
	filter: age => {return age < 6}},
	{name:"Elfins",
	filter: age => {return age > 5 && age < 11}},
	{name:"Pioneers",
	filter: age => {return age > 9 && age < 13}},
	{name:"Venturers",
	filter: age => {return age > 12 && age < 16}},
	{name:"DFs/Adults",
	filter: age => {return age > 15}},
]

module.exports = woodcraft;
//this file contains age groups, etc

const woodcraft = [
    {
        name: "Woodchips",
        singular: "Woodchip",
        filter: age => {
            return age < 6
        }
    },
    {
        name: "Elfins",
        singular: "Elfin",
        filter: age => {
            return age > 5 && age < 10
        }
    },
    {
        name: "Pioneers",
        singular: "Pioneer",
        filter: age => {
            return age > 9 && age < 13
        }
    },
    {
        name: "Venturers",
        singular: "Venturer",
        filter: age => {
            return age > 12 && age < 16
        }
    },
    {
        name: "DFs/Adults",
        singular: "DF/Adult",
        filter: age => {
            return age > 15
        }
    },
];

module.exports = woodcraft;
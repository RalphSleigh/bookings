const readline = require('readline');
const bcrypt = require('bcrypt');
const faker = require('faker/locale/en_GB');
const {execSync} = require('child_process');


const db = require('./orm.js');


execSync('.\\node_modules\\.bin\\sequelize db:migrate:undo:all');
execSync('.\\node_modules\\.bin\\sequelize db:migrate');

const models = {};

if (process.argv && process.argv[2] === "sync") {
    console.log("syncing");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const question = q => {
        return new Promise((resolve) => {
            rl.question(q, answer => resolve(answer))
        });
    };

    data = {};

    question("Admin account Username: ")
        .then(a => {
            data.username = a;
            return question("Admin account e-mail: ")
        }).then(a => {
        data.email = a;
        return question("Admin account password: ")
    }).then(a => {
        rl.close();
        data.password = a;
        return db
    }).then(() => user.create({
        userName: 'Guest',
        password: '',
        email: ''
    })).then(
        () => Promise.all([db.role.create({name: "admin"}), db.user.create({
                userName: data.username,
                password: bcrypt.hashSync(data.password, bcrypt.genSaltSync()),
                email: data.email
            }
        )]))

        .then(results => {
            results[1].addrole(results[0]);
        });

} else if (process.argv && process.argv[2] === "seed") {

    console.log("seeding");

    db.user.create({
        userName: 'Guest',
        password: '',
        email: 'example@example.com'
    }).then(
        () => db.user.create({
            userName: 'Ralph',
            password: '$2a$10$Eg7ZnRfw9s1H/rrYqzNZ5exaYkhKhQvTN3TNhsm5CluiEbhcv5EL6',
            email: 'ralph.sleigh@woodcraft.org.uk',
        }))
        .then(user => {
            return db.role.create({name: "admin", userId: user.id})
        })
        .then(createUsers)
        .then(createEvents)
        .then(createOrganisations)
        .then(createVillages)
        .then(createBookings)
        .then(createParticipants)
        .then(createApplications);

} else {
    console.log("please specify sync or seed");
}

function createUsers() {
    const users = new Array(10).fill().map(() => {
        return db.user.create({
            userName: faker.name.firstName() + ' ' + faker.name.lastName(),
            password: '',
            email: faker.internet.email()
        })
    });
    return Promise.all(users).then(users => {
        models.users = users;
        return true
    })
}

function createEvents() {
    events = [{
        name: 'Ralphs Event',
        description:
            `This a cool event for cool people

Its free!`,
        startDate: new Date("2019-8-8"),
        endDate: new Date("2019-8-10"),
        bookingDeadline: new Date("2019-8-4"),
        userId: 2,
        feeModel: "free",
        feeData: {},
        bookingPolicy: 'approved',
        paymentTypes: ["Cash", "Cheque", "Bank Transfer"],
        paymentInfo: "Ho Ho Ho",
        organisationsEnabled: false
    }, {
        name: 'This is a large event with many people',
        description:
            `This event has several hundred people booked already

It costs £55`,
        startDate: new Date("2019-10-8"),
        endDate: new Date("2019-10-10"),
        bookingDeadline: new Date("2019-10-4"),
        userId: 2,
        feeModel: "flat",
        feeData: {amount: 55},
        bookingPolicy: 'approved',
        paymentTypes: ["Cash", "Cheque", "Bank Transfer"],
        paymentInfo: `plz give us *all* teh monies`,
        organisationsEnabled: true
    }, {
        name: 'Past deadline',
        description:
            `This event is past its booking deadline, but nothing happens yet

It also demonstrates the Ealing donation structure`,
        startDate: new Date("2019-4-8"),
        endDate: new Date("2019-4-10"),
        bookingDeadline: new Date("2016-11-4"),
        bookingPolicy: 'guest',
        userId: 2,
        feeModel: "ealing",
        feeData: {amount: 35},
        paymentTypes: ["Cheque", "Bank Transfer"],
        paymentInfo: `plz give us *all* teh monies`,
        organisationsEnabled: false
    }];
    const promises = events.map(e => {
        return db.event.create(e)
    });
    return Promise.all(promises).then(e => {
        models.events = e;
        return true
    })

}

function createOrganisations() {
    promises = [{
        name: 'Woodcraft Folk',
        eventId: models.events[1].id
    }, {
        name: 'Forestlore Faries',
        eventId: models.events[1].id
    }, {
        name: "Big Jim's Big Gang",
        eventId: models.events[1].id
    }].map(o => db.organisation.create(o));
    return Promise.all(promises).then(o => {
        models.organisations = o;
        return true
    })
}

function createVillages() {
    let i = 0;
    const promises = new Array(10).fill().map(() => {
        i++;
        return db.village.create({name: 'Village-' + i, eventId: models.events[1].id})
    });
    return Promise.all(promises).then(v => {
        models.villages = v;
        return true
    })
}

function createBookings() {
    const promises = new Array(20).fill().map(() =>
        db.booking.create({
            userName: faker.name.findName(),
            userEmail: faker.internet.email(),
            userContact: faker.phone.phoneNumber(),
            paymentType: getRandomPaymentType(),
            guestUUID: faker.random.uuid(),
            eventId: models.events[1].id,
            villageId: models.villages.random().id,
            organisationId: models.organisations.random().id
        }))
    return Promise.all(promises).then(b => {
        models.bookings = b;
        return true
    })
}

function createParticipants() {
    const promises = new Array(getRandomInt(500, 600)).fill().map(() =>
        db.participant.create({
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
            age: getRandomInt(5, 20),
            diet: getRandomDiet(),
            dietExtra: getRandomDietExtra(),
            medical: getRandomMedical(),
            bookingId: models.bookings.random().id
        }));
    return Promise.all(promises).then(p => {
        models.participants = p;
        return true
    })
}

function createApplications() {
    let i = 0;
    const promises = new Array(7).fill().map(() => {
        return db.application.create({
            message: 'Let me book please',
            eventId: models.events.filter(e => e.bookingPolicy === 'approved').random().id,
            userId: models.users[i++].id
        })
    });
    return Promise.all(promises).then(a => {
        models.applications = a;
        return true
    })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomDiet() {
    const diets = ["omnivore", "omnivore", "omnivore", "vegetarian", "vegetarian", "vegan"];
    return diets[getRandomInt(0, 6)]
}

function getRandomDietExtra() {
    const extras = [
        "Allergic to nuts",
        "Eats plain food only",
        "No tomatoes please",
        "Severe nut allergy",
        "Does not like potatoes",
        "Will only eay dinosaur shaped food",
        "Has a seafood allergy",
        "lactose intolerent, no dairy",
        "Subsists by consuming the souls of those around them",
        "Hematophageous",
        "Allergic to lentils",
        "Needs meat supplements",
        "No rabbit food please",
        "NO NUTS! THEY WILL DIE"
    ];
    return Math.random() > 0.95 ? extras[getRandomInt(0, extras.length)] : "";
}

function getRandomMedical() {
    const medical = [
        "Asthma",
        "Occasional migranes, takes Aspirin when needed",
        "server allergies, carries epipen",
        "diabetic",
        "Asthma, carries inhaler",
        "fluoxetine 2mg",
        "venlafaxine",
        "methyltestosterone",
        "drostanolone propionate",
        "Cebocap 50g daily",
        "diabeties injects daily",
        "Moody"

    ];
    return Math.random() > 0.95 ? medical[getRandomInt(0, medical.length)] : "";
}

function getRandomPaymentType() {
    const types = ["Cheque", "Cheque", "Bank Transfer", "Bank Transfer", "Bank Transfer", "Cash"];
    return types[getRandomInt(0, 6)]
}

Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}
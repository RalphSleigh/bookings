const readline = require('readline');
var bcrypt = require('bcrypt');
var faker = require('faker/locale/en_GB');

var User = require('./models/user.js');
var Event = require('./models/event.js');
var Role = require('./models/role.js');
var Booking = require('./models/booking.js');
var Participant = require('./models/participant.js');
var o = require('./orm.js');

if(process.argv && process.argv[2] === "sync") {
	console.log("syncing");

	const rl = readline.createInterface({
 		input: process.stdin,
 		output: process.stdout});

	const question = q => {
  		return new Promise((resolve) => {
    		rl.question(q, answer => resolve(answer))
  		});
	}

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
		return o.sync({force: true})
	}).then(() => User.create({
    	userName: 'Guest',
    	password: '',
	 	email: ''
	})).then(() => Promise.all([Role.create({name:"admin"}),User.create({
    	userName: data.username,
		password: bcrypt.hashSync(data.password, bcrypt.genSaltSync()), 
		email: data.email}
	)])).then(results => {
		results[1].addRole(results[0]);
	});

} else if(process.argv && process.argv[2] === "seed") {
	
	console.log("seeding");

	o.sync({force: true})
	.then(() => User.create({
  	  	userName: 'Guest',
   	 	password: '',
	  	email: ''
	})).then(() => Promise.all([Role.create({name:"admin"}),User.create({
    	userName: 'Ralph',
    	password: '$2a$10$Eg7ZnRfw9s1H/rrYqzNZ5exaYkhKhQvTN3TNhsm5CluiEbhcv5EL6',
		email: 'ralph.sleigh@woodcraft.org.uk',
	})])).then(results => {
		results[1].addRole(results[0]);
		return results[1];
	}).then(user => Promise.all([Event.create({
    			name: 'Ralphs Event',
   				description: 'Empty Event',
				startDate: new Date("2017-8-8"),
				endDate: new Date("2017-8-10"),
				bookingDeadline: new Date("2017-8-4"),
				allowGuestBookings:false,
				userId: user.id,
				feeModel:"free",
				feeData:{}}),
			Event.create({
    			name: 'This is a large event with many people',
   				description: 'Gonna be good fun',
				startDate: new Date("2017-10-8"),
				endDate: new Date("2017-10-10"),
				bookingDeadline: new Date("2017-10-4"),
				allowGuestBookings:true,
				userId: user.id,
				feeModel:"flat",
				feeData:{amount:55}}),
			Event.create({
    			name: 'Past deadline',
   				description: 'Gonna be good fun',
				startDate: new Date("2016-4-8"),
				endDate: new Date("2016-4-10"),
				bookingDeadline: new Date("2016-11-4"),
				allowGuestBookings:false,
				userId: user.id,
				feeModel: "ealing",
				feeData:{amount:35}})
	])).then(events => {
		let bookings = [];
		for(let i = 0; i < 20; i++) {
			bookings.push(Booking.create({
				userName:faker.name.findName(),
				userEmail:faker.internet.email(),
				userContact:faker.phone.phoneNumber(),
				guestUUID:faker.random.uuid(),
				eventId:events[1].id
			}))
		}
		return Promise.all(bookings);
	}).then(bookings => {
		bookings.map(b => {
			const num = getRandomInt(15, 30)
			for(let i = 0; i < num; i++) {
				Participant.create({
					name:faker.name.firstName()+' '+faker.name.lastName(),
					age:getRandomInt(5,20),
					diet:getRandomDiet(),
					dietExtra:getRandomDietExtra(),
					medical:getRandomMedical(),
					bookingId:b.id
				});
			}
		});
	});

} else {
	console.log("please specify sync or seed");
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomDiet() {
	const diets = ["omnivore","omnivore","omnivore","vegetarian","vegetarian","vegan"]
	return diets[getRandomInt(0, 6)]
}

function getRandomDietExtra() {
	const extras =[
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
	return Math.random() > 0.95 ? extras[getRandomInt(0,extras.length)] : null;
}

function getRandomMedical() {
	const medical =[
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
	return Math.random() > 0.95 ? medical[getRandomInt(0,medical.length)] : null;
}
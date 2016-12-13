var User = require('./models/user.js');
var Event = require('./models/event.js');
var Role = require('./models/role.js');
var o = require('./orm.js');

//do the thingie

// force: true will drop the table if it already exists
  // Table created
  


//do the thingie

// force: true will drop the table if it already exists
o.sync({force: true})
.then(() => User.create({
    UserName: 'Guest',
    Password: '',
	  Email: ''
}))
.then(() => Promise.all([Role.create({Name:"admin"}),User.create({
    UserName: 'Ralph',
    Password: '$2a$10$Eg7ZnRfw9s1H/rrYqzNZ5exaYkhKhQvTN3TNhsm5CluiEbhcv5EL6',
	Email: 'ralph.sleigh@woodcraft.org.uk',
})]))
.then(results => {
	results[1].addRole(results[0]);
	return results[1];
})
.then(user => Promise.all([Event.create({
    			Name: 'Ralphs Event',
   				Description: 'Gonna be good fun',
				StartDate: new Date("2017-8-8"),
				EndDate: new Date("2017-8-10"),
				BookingDeadline: new Date("2017-8-4"),
				AllowGuestBookings:false,
				userId: user.id}),
			Event.create({
    			Name: 'Another Event guest allowed',
   				Description: 'Gonna be good fun',
				StartDate: new Date("2017-10-8"),
				EndDate: new Date("2017-10-10"),
				BookingDeadline: new Date("2017-10-4"),
				AllowGuestBookings:true,
				userId: user.id}),
			Event.create({
    			Name: 'Past deadline',
   				Description: 'Gonna be good fun',
				StartDate: new Date("2016-4-8"),
				EndDate: new Date("2016-4-10"),
				BookingDeadline: new Date("2016-11-4"),
				AllowGuestBookings:false,
				userId: user.id})
]));


//shared permission checks
//These may get narly as need to work with both the plain JS user objects and sequalise instance?
let permissions = {}

permissions.editEvent = (user, event) => {
	if(user.roles.find(role => role.name === "admin"))return true //admin can always
	return user.id === event.userId
}

permissions.createEvent = user => {
		if(user.roles.find(role => role.name === "admin"))return true //admin can always
		return false;
} 

permissions.bookEvent = (user, event) => {
		if(user.roles.find(role => role.name === "admin"))return true; //admin can always
		if(user.id !== 1)return true; //non guest can
		if(event.allowGuestBookings === true)return true; //anyone can book 
		return false;
} 

permissions.viewBooking = (user, booking) => {
	if(user.roles.find(role => role.name === "admin"))return true; //admin can
	if(booking.userId === user.id)return true; //owner can
	return false;
}

permissions.manageEvent = user => {
		if(user.roles.find(role => role.name === "admin"))return true; //admin can always
		return false;
}

module.exports = permissions;
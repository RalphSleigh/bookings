//shared permission checks
//These may get narly as need to work with both the plain JS user objects and sequalise instance?
let permissions = {}

permissions.editEvent = (user, event) => {
	if(user.roles.find(role => role.Name === "admin"))return true //admin can always
	return user.id === event.userId
}


module.exports = permissions;
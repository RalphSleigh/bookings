//shared permission checks
//these functions are then wrapped by the client and server ready for use


let permissions = {};

permissions.editEvent = (user, event) => {
    if (user.roles.find(role => role.name === "admin")) return true //admin can always
    return user.id === event.userId
};

permissions.createEvent = user => {
    if (user.roles.find(role => role.name === "admin")) return true //admin can always
    return false;
};

permissions.applyToBookEvent = (user, event) => {
    if (user.roles.find(role => role.name === "admin")) return false; //admin does not need to apply
    if (user.id === 1) return false; //guest can't apply
    if (user.roles.find(role => role.name === "book" && role.eventId === event.id)) return false; //are we approved?
    if (user.applications.find(a => a.eventId === event.id)) return false; //did we apply already?
    if (event.bookingPolicy === 'approved') return true; //event needs to be approved
    return false;
};


permissions.bookEvent = (user, event) => {
    if (user.roles.find(role => role.name === "admin")) return true; //admin can
    if (event.bookingPolicy === 'guest') return true; //anyone can book
    if (event.bookingPolicy === 'approved' && user.roles.find(role => role.name === "book" && role.eventId === event.id)) return true; //booking approved
    if (event.bookingPolicy === 'registered' && user.id !== 1) return true; //non guest can book registered events

    return false;
};

permissions.viewBooking = (user, booking) => {
    if (user.roles.find(role => role.name === "admin")) return true; //admin can
    if (booking.userId === user.id) return true; //owner can
    return false;
};

permissions.manageEvent = (user, event) => {
    if (user.roles.find(role => role.name === "admin")) return true; //admin can always
    if (event.userId === user.id) return true;  //event owner can manage
    return false;
};

permissions.decideApplication = (user, event) => {
    if (user.roles.find(role => role.name === "admin")) return true; //admin can always
    if (event.userId === user.id) return true;  //event owner can manage
    return false;
};

module.exports = permissions;
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

permissions.bookIntoOrganisation = (user, event, organisation, booking) => {
    if (user.roles.find(role => role.name === "admin")) return true; //naturally...
    if (!permissions.bookEvent(user, event)) return false;//need to be able to book into the event...
    if (booking && booking.organisationId === organisation.id) return true;//a booking can always book into its existing organisation (used on update)
    return user.roles.find(role => role.name === "book"
        && role.eventId === event.id
        && (role.organisationId === organisation.id || role.organisationId === null));
};

permissions.assignVillage = (user, event) => {
    return permissions.manageEvent(user, event); //for now the same as an event manager, this will change
};

permissions.addVillage = (user, event) => {
    return permissions.manageEvent(user, event); //for now the same as an event manager, this will change
};

permissions.getUserList = user => {
    if (user.roles.find(role => role.name === "admin")) return true;
    if (user.roles.find(role => role.name === "create")) return true;
    if (user.roles.find(role => role.name === "Manage" && role.organisationId === null && role.villageId === null)) return true;
    return false;
};

module.exports = permissions;
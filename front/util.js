//utility functions
import Cookies from 'js-cookie'


//set up a UUID as a bookings key in local storage so guest users can edit previous bookings done in their browser.
let guestUUID = '';

if (localStorage.guestUUID) guestUUID = localStorage.guestUUID;
else localStorage.guestUUID = guestUUID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	return v.toString(16);
});

Cookies.set("guestUUID", guestUUID);

export { guestUUID };
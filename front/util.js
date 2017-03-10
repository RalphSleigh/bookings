//utility functions
import Cookies from 'js-cookie'


//set up a UUID as a bookings key in local storage so guest users can edit previous bookings done in their browser.
//if we have one in the URL, use that instead and discard the browser one...

const regex =/guestUUId\/[0-9]*\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})/i


let guestUUID = '';
const result = window.location.href.match(regex);


if(result) {
	localStorage.guestUUID = guestUUID = result[1];
} else if (localStorage.guestUUID) guestUUID = localStorage.guestUUID;
else localStorage.guestUUID = guestUUID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	return v.toString(16);
});

Cookies.set("guestUUID", guestUUID);

export { guestUUID };
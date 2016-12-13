//Long Story, could use some fixing,,  we should actually do XSFR sometimes

import Cookies from 'js-cookie'

export default function rfetch(url, method, data) {
	var options = {	method:method,
					headers: {  
                  		"Content-type": "application/json; charset=UTF-8",},
					credentials: "same-origin",
					};

	if(method === "POST") {
		options.headers["X-XSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");
	}
	if(typeof(data) !== "undefined") options.body = JSON.stringify(data);

	return fetch(url, options).then(handleErrors).then(r => r.json());
}

function handleErrors(response) {
    if (!response.ok) {
        return Promise.reject(response);
    }
    return response
}
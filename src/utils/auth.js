import Cookies from 'js-cookie'

const TOKENKEY = 'Authorization'
const DOMAIN = process.env.VUE_APP_BASE_DOMAIN; //'192.168.1.20'

export function getToken() {
	return Cookies.get(TOKENKEY);
}

export function setToken(token, expires) {
	if (expires) {
		expires = new Date(new Date().getTime() + expires * 1000);
	}
	return Cookies.set(TOKENKEY, token, {
		expires: expires,
		domain: DOMAIN
	});
}

export function removeToken() {
	return setToken('',-1);
}
export function deleteToken() {
	return Cookies.remove(TOKENKEY,{domain:DOMAIN});
}

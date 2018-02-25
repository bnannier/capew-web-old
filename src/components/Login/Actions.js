export const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN'
export const SITE_LOGIN = 'SITE_LOGIN'

export function facebookLogin(login) {
    return {
        type: FACEBOOK_LOGIN,
        login
    };
}

export function siteLogin(login) {
    return {
        type: SITE_LOGIN,
        login
    };
}
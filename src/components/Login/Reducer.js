import {
    FACEBOOK_LOGIN,
    SITE_LOGIN
} from './Actions';

const initialState = {
    accessToken: "",
    email: "",
    expiresIn: "",
    id: "",
    name: "",
    picture: {
        height: "",
        is_silhouette: "",
        url: "",
        width: ""
    },
    signedRequest: "",
    userID: ""
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case FACEBOOK_LOGIN:
            return {
                ...state,
                accessToken: action.login.accessToken,
                email: action.login.email,
                expiresIn: action.login.expiresIn,
                id: action.login.id,
                name: action.login.name,
                picture: {
                    height: action.login.picture.data.height,
                    is_silhouette: action.login.picture.data.is_silhouette,
                    url: action.login.picture.data.url,
                    width: action.login.picture.data.width
                },
                signedRequest: action.login.signedRequest,
                userID: action.login.userID
            };
        case SITE_LOGIN:
            return {

            };
        default:
            return state;
    }
}
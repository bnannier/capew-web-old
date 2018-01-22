export const LOGIN = 'LOGIN'

export function removeFromCalendar ({ user }) {
    return {
        type: LOGIN,
        user
    }
}
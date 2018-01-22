import {
    LOGIN
} from './Actions'

export default function loginReducer (state = initialCalendarState, action) {
    const {day, recipe, meal} = action

    switch (action.type) {
        case ADD_RECIPE :
            return {
                ...state,
                [day]: {
                    ...state[day],
                    [meal]: recipe.label,
                }
            }
        case REMOVE_FROM_CALENDAR :
            return {
                ...state,
                [day]: {
                    ...state[day],
                    [meal]: null,
                }
            }
        default :
            return state
    }
}
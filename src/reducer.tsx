export const initialState = {
    name: "Utkarsh",
    age: 29
}

export type actionType = {
    type: 'UPDATE_NAME',
    payload: string
} | {
    type: 'UPDATE_AGE',
    payload: number
} 

export const reducer = (state: typeof initialState, action : actionType) => {

    switch (action.type) {
        case 'UPDATE_NAME':
            return {
                ...state,
                name: action.payload
            }
            
            
        case 'UPDATE_AGE':
            return {
                ...state,
                age: action.payload
            }
            
            
    
        default:
            return state;
    }

}


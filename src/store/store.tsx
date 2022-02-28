import { createStore } from 'redux'

const initialState = {
    tasks: ['sdsdfsdfsdf', 'dasfasdfasdf']
}

const todoReducer =  (state = initialState, action: any) => {
    if(action.type === 'add'){

        return {
            tasks:[ action.value, ...state.tasks ]
        }
    }

    return state
}


const store = createStore(todoReducer)

export default store
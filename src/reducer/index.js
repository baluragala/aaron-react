import {INC, DEC} from "../actionTypes/index";

const reducer = (prevState = {counter: 0}, action) => {

    switch (action.type) {
        case INC:
            return {counter: prevState.counter + action.by}; // new state
        case DEC:
            return {counter: prevState.counter - action.by}; // new state
        default:
            return prevState
    }
};

export default reducer;
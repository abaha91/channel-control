import {createStore} from "redux";

let initialState = {
    isOpenedSettingsBar: false,
};

function appState (state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_SETTINGS_BAR':
            return { ...state, inputValue: action.text };
            break;
    }
    return state
}


let store = createStore(appState, initialState);
store.subscribe(() => console.log(store.getState()));
export default store;
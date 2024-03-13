// third-party
import { combineReducers } from 'redux';

import basicSetupReducer from './slices/basic-setting'
import snackbarReducer from './slices/snackbar';
import menuReducer from './slices/menu';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    basicSetup: basicSetupReducer,
    snackbar: snackbarReducer,
    menu: menuReducer
});

export default reducer;

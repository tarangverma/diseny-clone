import {configureStore , getDefaultMiddleware} from '@reduxjs/toolkit';
import userReducer from '../feature/users/userSlice';

export default configureStore({
    reducer: {
        user: userReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
})
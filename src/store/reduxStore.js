import { configureStore } from "@reduxjs/toolkit";
import { tankReducer } from "../redux/TankDataslice";
import logger from "redux-logger";

export const store = configureStore({
    reducer : {
        tankReducer : tankReducer,
    },
    // middleware : (defaultMiddleware) => defaultMiddleware().concat(logger)
})
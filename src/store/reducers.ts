import { combineReducers } from "@reduxjs/toolkit";
import districtsReducer from "../features/districtsTracking/slice";

const rootReducer = combineReducers({ district: districtsReducer });

export default rootReducer;

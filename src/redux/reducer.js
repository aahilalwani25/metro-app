import { combineReducers } from "redux";
import fetchWeatherSlice from './WeatherFetchSlice/index'

const rootReducer= combineReducers({
    fetchWeatherSlice
})

export default rootReducer;
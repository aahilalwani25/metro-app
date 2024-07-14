import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Helper from '../Helper';


//action
export const fetchWeather = createAsyncThunk(
  'weatherFetchSlice/fetchWeather',
  async (payload, thunkAPI) => {
    try {
      const weatherResult = await Helper(payload);

      if (weatherResult) {
        if (weatherResult.status === 200) {
          return weatherResult.data;
        } else if (weatherResult.status === 404) {
          return thunkAPI.rejectWithValue('Weather not found');
        } else if (weatherResult.status === 500) {
          return thunkAPI.rejectWithValue(
            'server has some error. please try again later',
          );
        }else{
            return thunkAPI.rejectWithValue(
                'no data received',
              );
        }
      } else {
        return thunkAPI.rejectWithValue('Weather could not be fetched');
      }
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
  },
);

const fetchWeatherSlice= createSlice({
    name:'weatherFetchSlice',
    initialState:{
        weatherForecastResults:null,
        isSuccess: false,
        isError: false,
        isLoading: false,
        errorMessage:'',
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchWeather.fulfilled,(state,action)=>{
            state.isLoading= false;
            state.isError= false;
            state.isSuccess= true;
            state.weatherForecastResults= action.payload;
        })
        .addCase(fetchWeather.rejected,(state,action)=>{
            state.isLoading= false;
            state.isError= true;
            state.isSuccess= false;
            state.errorMessage= action.error.message
        })
        .addCase(fetchWeather.pending,(state,action)=>{
            state.isLoading= true;
            state.isError= false;
            state.isSuccess= false;
        })
    }
})


export default fetchWeatherSlice.reducer;
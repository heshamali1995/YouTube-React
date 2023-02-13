import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    channelDetails: null
}

const options = {
    url: process.env.REACT_APP_BASE_URL,
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

const fetchDetails = createAsyncThunk("channelDetails/fetchChannels", async (url) => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/${url}`, options);
    return response.data;
});

const channelDetailsSlice = createSlice({
    name: "details",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchDetails.fulfilled, (state, action) => {
            state.channelDetails = action.payload;
        });
    }
});

export {
    channelDetailsSlice,
    fetchDetails
}
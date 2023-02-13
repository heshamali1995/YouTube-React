import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    videoDetails: null
}

const options = {
    url: process.env.REACT_APP_BASE_URL,
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

const fetchVideoDetails = createAsyncThunk("videoDetails/fetchVideoDetails", async (url) => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/${url}`, options);
    return response.data;
});

const videoDetailsSlice = createSlice({
    name: "details",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideoDetails.fulfilled, (state, action) => {
            state.videoDetails = action.payload;
        });
    }
});

export {
    videoDetailsSlice,
    fetchVideoDetails
}
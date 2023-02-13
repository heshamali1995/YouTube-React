import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    videos: [],
    error: "",
    selectedCategory: "New"
}

const options = {
    url: process.env.REACT_APP_BASE_URL,
    params: {
        maxResults: 50
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

const fetchData = createAsyncThunk("videos/fetchData", async (url) => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/${url}`, options);
    return response.data;
})

const videoSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        changeCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.videos = action.payload;
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

const { changeCategory } = videoSlice.actions;

export {
    videoSlice,
    fetchData,
    changeCategory
}
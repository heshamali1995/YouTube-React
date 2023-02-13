import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { videoSlice } from "./videos/videoSlice";
import { channelDetailsSlice } from "./channelDetails/channelDetails";
import { videoDetailsSlice } from "./videoDetails/videoDetailsSlice";
import { darkModeSlice } from "./darkMode/darkMode";

const store = configureStore({
    reducer: {
        data: videoSlice.reducer,
        channelDetails: channelDetailsSlice.reducer,
        videoDetails: videoDetailsSlice.reducer,
        darkMode: darkModeSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
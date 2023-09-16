import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const updateSlice = createSlice({
  name: "update",
  initialState,
  reducers: {
    updateRequest: (state) => {
      state.loading = true;
    },
    updateSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateFailure: (state, action) => {
      state.loading = false;

      state.error = action.payload;
    },
    timelineRequest: (state) => {
      state.loading = true;
    },
    timelineSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    timelineFailure: (state, action) => {
      state.loading = false;

      state.error = action.payload;
    },
    projectRequest: (state) => {
      state.loading = true;
    },
    projectSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    projectFailure: (state, action) => {
      state.loading = false;

      state.error = action.payload;
    },
    deleteTimelineRequest: (state) => {
      state.loading = true;
    },
    deleteTimelineSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteTimelineFailure: (state, action) => {
      state.loading = false;

      state.error = action.payload;
    },
    deleteProjectRequest: (state) => {
      state.loading = true;
    },
    deleteProjectSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteProjectFailure: (state, action) => {
      state.loading = false;

      state.error = action.payload;
    },
    contactRequest: (state) => {
      state.loading = true;
    },
    contactSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    contactFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
    clearMessages: (state) => {
      state.message = null;
    },
  },
});

export const {
  contactFailure,
  contactRequest,
  contactSuccess,
  updateFailure,
  updateRequest,
  updateSuccess,
  timelineFailure,
  timelineRequest,
  timelineSuccess,
  deleteTimelineFailure,
  deleteTimelineRequest,
  deleteTimelineSuccess,
  clearErrors,
  clearMessages,
  projectFailure,
  projectRequest,
  projectSuccess,
  deleteProjectFailure,
  deleteProjectRequest,
  deleteProjectSuccess,
} = updateSlice.actions;

export default updateSlice.reducer;

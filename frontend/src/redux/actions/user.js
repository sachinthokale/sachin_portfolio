import axios from "axios";
import {
  getUserFailure,
  getUserRequest,
  getUserSuccess,
} from "../reducers/userSlice.js";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  logoutFailure,
  logoutRequest,
  logoutSuccess,
  loadUserFailure,
  loadUserRequest,
  loadUserSuccess,
} from "../reducers/loginSlice.js";
import {
  updateFailure,
  updateRequest,
  updateSuccess,
  timelineFailure,
  timelineRequest,
  timelineSuccess,
  deleteTimelineFailure,
  deleteTimelineRequest,
  deleteTimelineSuccess,
  deleteProjectFailure,
  deleteProjectRequest,
  deleteProjectSuccess,
  projectSuccess,
  projectFailure,
  projectRequest,
  clearErrors,
  clearMessage,
  contactRequest,
  contactSuccess,
  contactError,
  contactFailure,
} from "../reducers/updateSlice.js";

export const getUser = () => async (dispatch) => {
  try {
    dispatch(getUserRequest());

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.get("/api/v1/user", config);
    dispatch(getUserSuccess(data));
  } catch (err) {
    dispatch(getUserFailure(err.response.data.message));
    console.log(err);
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/v1/login",
      { email, password },
      config
    );

    dispatch(loginSuccess(data.message));
  } catch (err) {
    dispatch(loginFailure(err.response.data.message));
    // console.log(err);
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(logoutRequest());
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get("/api/v1/logout", config);
    dispatch(logoutSuccess(data.message));
  } catch (err) {
    dispatch(logoutFailure(err.response.data.message));
    console.log(err);
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch(loadUserRequest());
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get("/api/v1/me", {}, config);
    dispatch(loadUserSuccess(data.user));
  } catch (err) {
    dispatch(loadUserFailure(err.response.data.message));
    console.log(err);
  }
};

export const updateUser =
  (name, email, password, skills, about) => async (dispatch) => {
    try {
      dispatch(updateRequest());
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.put(
        "/api/v1/admin/update",
        {
          name,
          email,
          password,
          skills,
          about,
        },
        config
      );
      dispatch(updateSuccess(data.message));
    } catch (error) {
      dispatch(updateFailure(error.response.data.message));
    }
  };

export const updateTimeline =
  (title, description, date) => async (dispatch) => {
    try {
      dispatch(timelineRequest());
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/v1/admin/timeline/add",
        {
          title,
          description,
          date,
        },
        config
      );
      dispatch(timelineSuccess(data.message));
    } catch (error) {
      dispatch(timelineFailure(error.response.data.message));
    }
  };

export const deleteTimeline = (id) => async (dispatch) => {
  try {
    dispatch(deleteTimelineRequest());

    const { data } = await axios.delete(`/api/v1/admin/timeline/${id}`);
    dispatch(deleteTimelineSuccess(data.message));
  } catch (error) {
    dispatch(deleteTimelineFailure(error.response.data.message));
  }
};

export const updateProject =
  (url, title, image, description, techStack) => async (dispatch) => {
    try {
      dispatch(projectRequest());
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/v1/admin/project/add",
        {
          url,
          title,
          image,
          description,
          techStack,
        },
        config
      );
      dispatch(projectSuccess(data.message));
    } catch (error) {
      dispatch(projectFailure(error.response.data.message));
    }
  };
export const contactUs = (name, email, message) => async (dispatch) => {
  try {
    dispatch(contactRequest());
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/v1/contact",
      {
        name,
        email,
        message,
      },
      config
    );
    dispatch(contactSuccess(data.message));
  } catch (error) {
    dispatch(contactFailure(error.response.data.message));
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch(deleteProjectRequest());
    // console.log(`id available in action ${id}`);

    const { data } = await axios.delete(`/api/v1/admin/project/${id}`);
    dispatch(deleteProjectSuccess(data.message));
  } catch (error) {
    dispatch(deleteProjectFailure(error.response.data.message));
  }
};

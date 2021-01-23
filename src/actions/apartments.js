import {
  GET_APARTMENTS,
  GET_APARTMENT_ID,
  GET_RECENT_APARTMENTS,
  GET_FEATURED_APARTMENTS,
  GET_AGENTS,
  GET_AGENT_ID,
  SEND_SUBSCRIPTION,
} from "./types";
import projectBaseUrl from "./projectBaseUrl";

/* 
  Commented codes are alternative mentor you can use to get your endpoint API and
  dispatch to a reducer if you didn't have a different url header.

  In my case, i defined a constant url header in projectBaseUrl and appends the required method to it
  when calling different url. so that means in case there is a change in my domain name, i only have
  to change my url header in one place which is projectBaseUrl and everythin else would still work
  */

// ----------> Get all apartments <----------------
export const getApartments = () => {
  return async (dispatch) => {
    const response = await projectBaseUrl.get("/apartment/");
    dispatch({ type: GET_APARTMENTS, payload: response.data });
  };
};

// ---------> Apartment ID <------------------------
export const getApartmentId = (id) => {
  return async (dispatch) => {
    const response = await projectBaseUrl.get(`/apartment/${id}/`);
    dispatch({ type: GET_APARTMENT_ID, payload: response.data });
  };
};

// ----------> Get Recent Apartments <--------------

export const getRecentApartments = () => {
  return async (dispatch) => {
    const response = await projectBaseUrl.get("/apartment/recent/");
    dispatch({ type: GET_RECENT_APARTMENTS, payload: response.data });
  };
};

// ------------> get featured apartments <---------------
export const getFeaturedApartments = () => {
  return async (dispatch) => {
    const response = await projectBaseUrl.get("/apartment/featured/");
    dispatch({ type: GET_FEATURED_APARTMENTS, payload: response.data });
  };
};

// ------------> get Agent <---------------

export const getAgents = () => {
  return async (dispatch) => {
    const response = await projectBaseUrl.get("/apartment/agents/");
    dispatch({ type: GET_AGENTS, payload: response.data });
  };
};

// ---------> AGENT ID <------------------------
export const getAgentId = (id) => {
  return async (dispatch) => {
    const response = await projectBaseUrl.get(`/apartment/agent/${id}/`);
    dispatch({ type: GET_AGENT_ID, payload: response.data });
  };
};

export const postSubscription = (message) => {
  return async (dispatch) => {
    const response = await projectBaseUrl.post("/apartment/subscribe/", {
      message,
    });
    dispatch({ type: SEND_SUBSCRIPTION, payload: response.data });
  };
};

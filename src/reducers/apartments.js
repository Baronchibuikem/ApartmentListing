import {
  GET_APARTMENTS,
  GET_APARTMENT_ID,
  GET_RECENT_APARTMENTS,
  GET_FEATURED_APARTMENTS,
  GET_AGENTS,
  GET_AGENT_ID,
  SEND_SUBSCRIPTION
} from "../actions/types.js";

const initialState = {
  apartments: [],
  apartmentId: {},
  recentApartments: [],
  featuredApartments: [],
  agents: [],
  agentId: {},
  subscibe: {}
};

export default function(state = initialState, actions) {
  switch (actions.type) {
    case GET_APARTMENTS:
      return { ...state, apartments: actions.payload };
    case GET_APARTMENT_ID:
      return { ...state, apartmentId: actions.payload };
    case GET_RECENT_APARTMENTS:
      return { ...state, recentApartments: actions.payload };
    case GET_FEATURED_APARTMENTS:
      return { ...state, featuredApartments: actions.payload };
    case GET_AGENTS:
      return { ...state, agents: actions.payload };
    case GET_AGENT_ID:
      return { ...state, agentId: actions.payload };
    case SEND_SUBSCRIPTION:
      return { ...state, subscribe: actions.payload };
    default:
      return state;
  }
}

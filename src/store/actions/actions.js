import axios from 'axios';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SUBTRACT = 'SUBTRACT';
export const ADD = 'ADD';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';
export const GET_NBA_TEAMS = 'GET_NBA_TEAMS';


const getNBASettings = {
  "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"free-nba.p.rapidapi.com",
    "x-rapidapi-key":"e7aaf1b617msh586558079f533e6p1a7b9djsne2c69e38d431",
    "useQueryString":true
    },
  "params":{
    "page":"0"
  }
};

const nbaURL = "https://free-nba.p.rapidapi.com/teams";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const subtract = (val) => {
  return {
    type: SUBTRACT,
    value: val
  };
};

export const add = (val) => {
  return {
    type: ADD,
    value: val
  };
};

export const saveResult = ctr => {
  return {
    type: STORE_RESULT,
    counter: ctr
  };
}

export const storeResult = (ctr) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().ctr.counter;
      console.log(oldCounter);
      dispatch(saveResult(ctr));
    }, 2000);
  }
};

export const deleteResult = (id) => {
  return {
    type: DELETE_RESULT,
    id: id
  };
};

export const saveTeams = (teams) => {
  return {
    type: GET_NBA_TEAMS,
    data: teams
  };
}

export const getNBATeams = () => {
  return dispatch => {
    axios.get(nbaURL, getNBASettings)
      .then(results => {
        console.log(results.data.data);
        dispatch(saveTeams(results.data.data))
      })
      .catch(err => {throw new Error(err)})
  }
};
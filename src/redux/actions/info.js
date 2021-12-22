 import { ActionTypes } from "../contants/action-types";
 import api from '../../API/api';
 
 
 export const  fetchInfo = () =>  async (dispatch) => {
  const response = await api.get("/info");
  console.log(response)

  dispatch({type:ActionTypes.FETCH__INFO, payload:response.data})
  
};
 
export const  setInfo = (setInfo) => {
    return{
      type:ActionTypes.SET__INFO,
      payload:setInfo,
    };
      
  };


 export const  fetchGuestsComments = () =>  async (dispatch) => {
  const response = await api.get("/guestscomments  ");
  console.log(response)

  dispatch({type:ActionTypes.FETCH__GUESTS__COMMENTS, payload:response.data})
  
};
 
export const  setGuestsComments = (setGuestsComments) => {
    return{
      type:ActionTypes.SET__GUESTS__COMMENTS,
      payload:setGuestsComments,
    };
      
  };